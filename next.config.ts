import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 95, 100],
  },
  async redirects() {
    return [
      {
        source: "/business",
        destination: "/investments",
        permanent: true,
      },
      {
        source: "/partnerships",
        destination: "/the-fold#join",
        permanent: true,
      },
    ];
  },
  experimental: {
    agentUpgrade: "security",
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
