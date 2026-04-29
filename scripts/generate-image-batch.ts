import { join } from "node:path";
import { z } from "zod";

// =============================================================================
// Gemini Batch API Schema (Official Format)
// Reference: https://ai.google.dev/gemini-api/docs/batch-api
// Reference: https://ai.google.dev/gemini-api/docs/image-generation
// =============================================================================

const AspectRatioSchema = z.enum([
  "1:1", "2:3", "3:2", "3:4", "4:3", "4:5", "5:4", "9:16", "16:9", "21:9"
]);

const ImageSizeSchema = z.enum(["1K", "2K", "4K"]);

const ResponseModalitiesSchema = z.array(
  z.enum(["TEXT", "IMAGE"])
).min(1);

const ImageConfigSchema = z.object({
  aspectRatio: AspectRatioSchema,
  imageSize: ImageSizeSchema,
});

const GenerationConfigSchema = z.object({
  responseModalities: ResponseModalitiesSchema,
  imageConfig: ImageConfigSchema,
});

const PartSchema = z.object({
  text: z.string().min(1),
});

const ContentSchema = z.object({
  parts: z.array(PartSchema).min(1),
});

const RequestSchema = z.object({
  contents: z.array(ContentSchema).min(1),
  generation_config: GenerationConfigSchema,
});

const BatchRequestSchema = z.object({
  key: z.string().min(1).regex(/^[a-zA-Z0-9_-]+$/, "key must be alphanumeric with underscores/hyphens"),
  request: RequestSchema,
});

type BatchRequest = z.infer<typeof BatchRequestSchema>;

// =============================================================================
// Input Schema (images.json)
// Accepts either a flat array or {"images": [...]}
// =============================================================================

const ImageDefinitionSchema = z.object({
  name: z.string().min(1).regex(/^[a-zA-Z0-9_-]+$/),
  prompt: z.string().min(1),
  aspectRatio: AspectRatioSchema,
  chapter: z.string().optional(),
  description: z.string().optional(),
});

type ImageDefinition = z.infer<typeof ImageDefinitionSchema>;

const ImagesConfigSchema = z.union([
  z.array(ImageDefinitionSchema),
  z.object({ images: z.array(ImageDefinitionSchema) }),
]);

// =============================================================================
// Main
// =============================================================================

async function main() {
  const configPath = join(import.meta.dir, "..", "src", "images.json");
  const file = Bun.file(configPath);
  const rawData = await file.json();

  const parseResult = ImagesConfigSchema.safeParse(rawData);
  if (!parseResult.success) {
    console.error("Error: Invalid images.json format");
    console.error(parseResult.error.format());
    process.exit(1);
  }

  const images: ImageDefinition[] = Array.isArray(parseResult.data)
    ? parseResult.data
    : parseResult.data.images;

  const batchRequests: string[] = [];
  const errors: Array<{ name: string; error: string }> = [];

  for (const image of images) {
    const batchRequest: BatchRequest = {
      key: image.name,
      request: {
        contents: [
          {
            parts: [{ text: image.prompt }],
          },
        ],
        generation_config: {
          responseModalities: ["IMAGE"],
          imageConfig: {
            aspectRatio: image.aspectRatio,
            imageSize: "2K",
          },
        },
      },
    };

    const validateResult = BatchRequestSchema.safeParse(batchRequest);
    if (!validateResult.success) {
      errors.push({
        name: image.name,
        error: validateResult.error.message,
      });
      continue;
    }

    batchRequests.push(JSON.stringify(validateResult.data));
  }

  if (errors.length > 0) {
    console.error("\nValidation errors:");
    for (const err of errors) {
      console.error(`  ${err.name}: ${err.error}`);
    }
    process.exit(1);
  }

  const outputPath = join(import.meta.dir, "..", "batch-requests.jsonl");
  await Bun.write(outputPath, batchRequests.join("\n") + "\n");

  console.log(`Generated batch requests: ${outputPath}`);
  console.log(`Total images: ${images.length}`);
  console.log(`Format: Gemini Batch API (Zod-validated)`);

  if (images.some(i => i.chapter)) {
    const byChapter = images.reduce((acc, img) => {
      const key = img.chapter ?? "(no chapter)";
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    console.log("\nBy chapter:");
    for (const [chapter, count] of Object.entries(byChapter).sort()) {
      console.log(`  ${chapter}: ${count}`);
    }
  }
}

main().catch(console.error);
