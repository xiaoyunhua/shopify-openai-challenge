/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    OPENAI_SECRET: process.env.OPENAI_SECRET
  }
}

module.exports = nextConfig
