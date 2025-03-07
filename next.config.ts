import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend-for-ecommerce-plateform2.onrender.com",
      },
    ],
  },
};

export default nextConfig;
