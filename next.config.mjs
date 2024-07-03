const BE_API_URL = process.env.BE_API_URL;

/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/api/:path*",
      destination: `${BE_API_URL}/:path*`,
    },
  ],
};

export default nextConfig;
