import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The portfolio now lives at /projects/completed. Keep existing /projects
      // links (internal and external) working with a single permanent hop.
      {
        source: "/projects",
        destination: "/projects/completed",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
