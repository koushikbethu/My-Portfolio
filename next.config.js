/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/My-Portfolio',
  assetPrefix: '/My-Portfolio/',
}

module.exports = nextConfig
