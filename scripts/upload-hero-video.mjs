/**
 * One-time script: uploads hero video to Vercel Blob.
 * Requires BLOB_READ_WRITE_TOKEN in .env.local
 * Run: node scripts/upload-hero-video.mjs
 * Then set NEXT_PUBLIC_HERO_VIDEO_URL in .env.local and Vercel to the printed URL.
 */

import { config } from "dotenv";
import { readFileSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { put } from "@vercel/blob";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// Load .env then .env.local (local overrides) so token in either file works
config({ path: join(root, ".env") });
config({ path: join(root, ".env.local") });

const token = process.env.BLOB_READ_WRITE_TOKEN;
if (!token) {
  console.error("Missing BLOB_READ_WRITE_TOKEN in .env or .env.local");
  process.exit(1);
}

const videoPath = join(__dirname, "..", "public", "images", "GettyImages-1311462781.mov");
if (!existsSync(videoPath)) {
  console.error("Video not found at public/images/GettyImages-1311462781.mov");
  process.exit(1);
}

console.log("Uploading hero video to Vercel Blob...");
const buffer = readFileSync(videoPath);

const { url } = await put("hero-video.mov", buffer, {
  access: "public",
  contentType: "video/quicktime",
});

console.log("\nUpload done. Hero video URL:");
console.log(url);
console.log("\nAdd to .env.local and Vercel Environment Variables:");
console.log("NEXT_PUBLIC_HERO_VIDEO_URL=" + url);
