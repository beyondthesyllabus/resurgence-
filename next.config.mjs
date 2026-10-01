import path from "path";
import { fileURLToPath } from "url";

const here = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the finished site can be hosted on any static host (Vercel, Netlify, GitHub Pages).
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // A stray package-lock.json exists in the parent Desktop folder; pin the workspace root to this project.
  outputFileTracingRoot: here,
};

export default nextConfig;
