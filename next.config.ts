/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove empty strings since you're using a custom domain
  basePath: undefined,
  assetPrefix: undefined,
}

module.exports = nextConfig