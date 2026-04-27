// next.config.mjs or next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://backend.realestateshop.co.nz/:path*",
      },
    ];
  },
};
export default nextConfig;
