import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export',
  trailingSlash: true,
  basePath: '/askthedocs',
  assetPrefix: '/askthedocs/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
