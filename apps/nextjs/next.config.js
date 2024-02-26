// Importing env files here to validate on build
/* import "./src/env.js";


import "@acme/auth/env";
 */
/** @type {import("next").NextConfig} */

const config = {
  reactStrictMode: true,
  /*  experimental: {
    typedRoutes: true,
  }, */
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["lh3.googleusercontent.com", "vercel.com"],
  },

  logging:{
    fetches:{
      fullUrl: true
    }
  },
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    "@acme/api",
    "@acme/auth",
    "@acme/db",
    "@acme/ui",
    "@acme/validators",
  ],

  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default config;
// "dev": "concurrently \"contentlayer dev\" \"pnpm with-env\" \"next dev\"",
