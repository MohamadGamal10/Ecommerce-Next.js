import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // protocol: "http",
        // hostname: "127.0.0.1",
        // port: "8000",
        hostname: "backend-for-ecommerce-plateform2.onrender.com",
      },
    ],
  },
};

export default nextConfig;
