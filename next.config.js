const { withKumaUI } = require("@kuma-ui/next-plugin")

/** @type {import('next').NextConfig} */
module.exports = withKumaUI({
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  output: process.env.GITHUB_ACTION !== undefined ? "export" : undefined,
})
