/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        hostname: 'lockthemes.com',
      },
    ],
  },
}

module.exports = nextConfig
