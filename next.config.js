/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: 'placehold.co' }
    ]
  }
}

module.exports = nextConfig
