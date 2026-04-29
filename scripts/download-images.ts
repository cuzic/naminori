import { join } from "node:path";
import { mkdir } from "node:fs/promises";

const BASE_URL = "https://generativelanguage.googleapis.com";

interface BatchResponse {
  name: string;
  metadata?: {
    state?: string;
    output?: { responsesFile?: string; fileName?: string };
    error?: { message?: string };
  };
}

interface BatchResult {
  key?: string;
  response?: {
    candidates?: Array<{
      content?: {
        parts?: Array<{
          inlineData?: { mimeType?: string; data?: string };
        }>;
      };
    }>;
  };
}

async function main() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("Error: GEMINI_API_KEY environment variable is not set");
    process.exit(1);
  }

  const jobInfoPath = join(import.meta.dir, "..", "batch-job.json");
  const jobInfoFile = Bun.file(jobInfoPath);

  if (!(await jobInfoFile.exists())) {
    console.error(
      "Error: batch-job.json not found. Run `bun run images:submit` first."
    );
    process.exit(1);
  }

  const jobInfo = await jobInfoFile.json();
  const batchName = jobInfo.name;

  console.log(`Checking batch job: ${batchName}`);
  const statusResponse = await fetch(`${BASE_URL}/v1beta/${batchName}`, {
    headers: { "x-goog-api-key": apiKey },
  });

  if (!statusResponse.ok) {
    const err = await statusResponse.text();
    throw new Error(`Failed to get batch status: ${err}`);
  }

  const batch: BatchResponse = await statusResponse.json();
  const meta = batch.metadata ?? {};
  const state = meta.state ?? "UNKNOWN";
  console.log(`Status: ${state}`);

  if (state !== "BATCH_STATE_SUCCEEDED" && state !== "JOB_STATE_SUCCEEDED") {
    if (state === "BATCH_STATE_FAILED" || state === "JOB_STATE_FAILED") {
      console.error("Batch job failed.");
      if (meta.error?.message) console.error(`Error: ${meta.error.message}`);
      process.exit(1);
    }
    console.log("Batch job is still processing. Please try again later.");
    process.exit(0);
  }

  const outputFileName = meta.output?.responsesFile ?? meta.output?.fileName;
  if (!outputFileName) {
    console.error("Error: No output file found in batch job.");
    process.exit(1);
  }

  console.log(`Output file: ${outputFileName}`);
  console.log("Downloading results...");

  const downloadUrl = `${BASE_URL}/v1beta/${outputFileName}:download?alt=media`;
  const dlResponse = await fetch(downloadUrl, {
    headers: { "x-goog-api-key": apiKey },
  });

  if (!dlResponse.ok) {
    const err = await dlResponse.text();
    throw new Error(`Failed to download results: ${err}`);
  }

  const resultsText = await dlResponse.text();

  const outputDir = join(import.meta.dir, "..", "src", "assets", "images");
  await mkdir(outputDir, { recursive: true });

  let saved = 0;
  let failed = 0;

  for (const line of resultsText.trim().split("\n")) {
    if (!line) continue;

    let result: BatchResult;
    try {
      result = JSON.parse(line);
    } catch {
      console.warn("Warning: failed to parse a result line");
      failed++;
      continue;
    }

    const imageName = result.key || "unknown";
    const candidates = result.response?.candidates;

    if (!candidates || candidates.length === 0) {
      console.warn(`No candidates for: ${imageName}`);
      failed++;
      continue;
    }

    const parts = candidates[0].content?.parts;
    if (!parts) {
      console.warn(`No content parts for: ${imageName}`);
      failed++;
      continue;
    }

    let wrote = false;
    for (const part of parts) {
      if (part.inlineData?.data) {
        const mimeType = part.inlineData.mimeType || "image/png";
        let extension = mimeType.split("/")[1] || "png";
        if (extension === "jpeg") extension = "jpg";
        const outputPath = join(outputDir, `${imageName}.${extension}`);
        const imageBuffer = Buffer.from(part.inlineData.data, "base64");
        await Bun.write(outputPath, imageBuffer);
        console.log(`  Saved: ${outputPath}`);
        saved++;
        wrote = true;
        break;
      }
    }
    if (!wrote) {
      console.warn(`No inline image data for: ${imageName}`);
      failed++;
    }
  }

  console.log(`\nResults: ${saved} saved, ${failed} failed`);
  console.log(`Output directory: ${outputDir}`);
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
