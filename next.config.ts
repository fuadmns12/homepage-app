import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// Cloudflare dev helper should only run in local development.
// Vercel production builds don't provide compatible workerd binaries.
if (process.env.NODE_ENV === "development" && process.env.VERCEL !== "1") {
  import("@opennextjs/cloudflare")
    .then((m) => m.initOpenNextCloudflareForDev())
    .catch(() => {
      // Ignore when Cloudflare runtime is unavailable.
    });
}

export default nextConfig;
