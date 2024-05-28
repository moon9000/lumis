/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lunis-strapi-bo.onrender.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lunis-strapi-bo.onrender.com",
        port: '1000',
        pathname: "lunis-strapi-bo.onrender.com",
      },
    ],
  },
};

module.exports = nextConfig;
