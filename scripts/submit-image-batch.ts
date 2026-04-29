import { join } from "node:path";

// =============================================================================
// Gemini Batch API REST Client
// Reference: https://ai.google.dev/gemini-api/docs/batch-api
// =============================================================================

const BASE_URL = "https://generativelanguage.googleapis.com";
const MODEL = "gemini-3.1-flash-image-preview";

interface FileUploadResponse {
  file: {
    name: string;
    uri: string;
    mimeType: string;
    sizeBytes: string;
    createTime: string;
    expirationTime: string;
    state: string;
  };
}

interface BatchJobResponse {
  name: string;
  displayName?: string;
  state: string;
  createTime?: string;
  updateTime?: string;
}

async function uploadFile(
  apiKey: string,
  filePath: string,
  displayName: string
): Promise<FileUploadResponse> {
  const file = Bun.file(filePath);
  const content = await file.text();
  const numBytes = new TextEncoder().encode(content).length;

  const startResponse = await fetch(`${BASE_URL}/upload/v1beta/files`, {
    method: "POST",
    headers: {
      "x-goog-api-key": apiKey,
      "X-Goog-Upload-Protocol": "resumable",
      "X-Goog-Upload-Command": "start",
      "X-Goog-Upload-Header-Content-Length": numBytes.toString(),
      "X-Goog-Upload-Header-Content-Type": "text/plain",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      file: { display_name: displayName },
    }),
  });

  if (!startResponse.ok) {
    const error = await startResponse.text();
    throw new Error(`Failed to start upload: ${error}`);
  }

  const uploadUrl = startResponse.headers.get("X-Goog-Upload-URL");
  if (!uploadUrl) {
    throw new Error("No upload URL returned");
  }

  const uploadResponse = await fetch(uploadUrl, {
    method: "PUT",
    headers: {
      "X-Goog-Upload-Command": "upload, finalize",
      "X-Goog-Upload-Offset": "0",
      "Content-Type": "text/plain",
    },
    body: content,
  });

  if (!uploadResponse.ok) {
    const error = await uploadResponse.text();
    throw new Error(`Failed to upload file: ${error}`);
  }

  return uploadResponse.json();
}

async function createBatchJob(
  apiKey: string,
  fileName: string,
  displayName: string
): Promise<BatchJobResponse> {
  const response = await fetch(
    `${BASE_URL}/v1beta/models/${MODEL}:batchGenerateContent`,
    {
      method: "POST",
      headers: {
        "x-goog-api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        batch: {
          display_name: displayName,
          input_config: {
            file_name: fileName,
          },
        },
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to create batch job: ${error}`);
  }

  return response.json();
}

async function main() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("Error: GEMINI_API_KEY environment variable is not set");
    process.exit(1);
  }

  const batchFilePath = join(import.meta.dir, "..", "batch-requests.jsonl");
  const batchFile = Bun.file(batchFilePath);

  if (!(await batchFile.exists())) {
    console.error(
      "Error: batch-requests.jsonl not found. Run `bun run images:prompts` first."
    );
    process.exit(1);
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const displayName = `naminori-images-${timestamp}`;

  console.log("Uploading batch file...");
  const uploadResult = await uploadFile(apiKey, batchFilePath, displayName);
  console.log(`File uploaded: ${uploadResult.file.name}`);
  console.log(`File URI: ${uploadResult.file.uri}`);

  console.log("\nCreating batch job...");
  const batchJob = await createBatchJob(
    apiKey,
    uploadResult.file.name,
    displayName
  );

  console.log(`Batch job created: ${batchJob.name}`);
  console.log(`Status: ${batchJob.state}`);

  const jobInfoPath = join(import.meta.dir, "..", "batch-job.json");
  await Bun.write(
    jobInfoPath,
    JSON.stringify(
      {
        name: batchJob.name,
        state: batchJob.state,
        fileName: uploadResult.file.name,
        fileUri: uploadResult.file.uri,
        displayName,
        createdAt: new Date().toISOString(),
      },
      null,
      2
    )
  );

  console.log(`\nJob info saved to: ${jobInfoPath}`);
  console.log("\nUse `bun run images:status` to check status.");
  console.log("Use `bun run images:download` to download results when complete.");
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
