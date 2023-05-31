/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  output: process.env.GITHUB_ACTION !== undefined ? "export" : undefined,
}
