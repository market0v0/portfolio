/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  typescript: {
    // Prevent Next.js from modifying tsconfig.json
    tsconfigPath: './tsconfig.json'
  }
}

module.exports = nextConfig
