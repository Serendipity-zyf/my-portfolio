import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If repo name is NOT <username>.github.io, uncomment and set basePath:
  // basePath: '/my-portfolio',
};

export default nextConfig;
