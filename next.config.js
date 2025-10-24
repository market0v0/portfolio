/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  typescript: {
    // Prevent Next.js from modifying tsconfig.json
    tsconfigPath: './tsconfig.json'
  },
  // Ensure API routes are enabled (serverless functions on Vercel)
  // DO NOT use output: 'export' as it disables API routes
}

module.exports = nextConfig
