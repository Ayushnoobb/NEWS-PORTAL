/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // IMAGE CONFIG
  images: {
    domains: ["https://www.onlinekhabar.com"],
    deviceSizes: [320, 420, 768, 1024, 1200],
    unoptimized: true,
    loader: "custom",
    loaderFile: "./src/utils/loaders/cloudinaryLoader.ts",
  },
}

module.exports = nextConfig
