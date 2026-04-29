import { join } from "node:path";

const BASE_URL = "https://generativelanguage.googleapis.com";

interface BatchResponse {
  name: string;
  metadata?: {
    state?: string;
    createTime?: string;
    updateTime?: string;
    batchStats?: {
      requestCount?: string;
      pendingRequestCount?: string;
      completedRequestCount?: string;
      failedRequestCount?: string;
    };
    output?: {
      responsesFile?: string;
      fileName?: string;
    };
    error?: { message?: string };
  };
  error?: { message?: string };
}

async function main() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("Error: GEMINI_API_KEY environment variable is not set");
    process.exit(1);
  }

  const jobInfoPath = join(import.meta.dir, "..", "batch-job.json");
  const jobFile = Bun.file(jobInfoPath);

  if (!(await jobFile.exists())) {
    console.error("Error: batch-job.json not found. Run `bun run images:submit` first.");
    process.exit(1);
  }

  const jobInfo = await jobFile.json();
  const batchName = jobInfo.name;

  console.log(`Checking batch job: ${batchName}\n`);

  const response = await fetch(`${BASE_URL}/v1beta/${batchName}`, {
    headers: { "x-goog-api-key": apiKey },
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to get batch status: ${error}`);
  }

  const batch: BatchResponse = await response.json();
  const meta = batch.metadata ?? {};
  const state = meta.state ?? "UNKNOWN";
  const stats = meta.batchStats ?? {};

  console.log(`Status: ${state}`);
  if (meta.createTime) console.log(`Created: ${meta.createTime}`);
  if (meta.updateTime) console.log(`Updated: ${meta.updateTime}`);

  if (stats.requestCount) {
    console.log(`\nProgress:`);
    console.log(`  Total: ${stats.requestCount}`);
    console.log(`  Pending: ${stats.pendingRequestCount ?? 0}`);
    console.log(`  Completed: ${stats.completedRequestCount ?? 0}`);
    console.log(`  Failed: ${stats.failedRequestCount ?? 0}`);
  }

  if (state === "BATCH_STATE_SUCCEEDED" || state === "JOB_STATE_SUCCEEDED") {
    console.log("\nBatch job completed successfully.");
    const outFile = meta.output?.responsesFile ?? meta.output?.fileName;
    if (outFile) console.log(`Output file: ${outFile}`);
    console.log("\nRun `bun run images:download` to download results.");
  } else if (state === "BATCH_STATE_FAILED" || state === "JOB_STATE_FAILED") {
    console.log("\nBatch job failed.");
    if (meta.error?.message) console.log(`Error: ${meta.error.message}`);
  } else {
    console.log("\nBatch job is still processing.");
  }

  await Bun.write(
    jobInfoPath,
    JSON.stringify(
      {
        ...jobInfo,
        state,
        updatedAt: new Date().toISOString(),
        outputFile: meta.output?.responsesFile ?? meta.output?.fileName,
      },
      null,
      2
    )
  );
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
