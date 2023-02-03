import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import rollupReplace from "@rollup/plugin-replace";
import type { UserConfig } from "vitest/config";
import path from "path";

const test = {
  globals: true,
  environment: "jsdom",
  setupFiles: ["src/__tests__/setupTests.ts"],
  threads: false,
  watch: false,
} as UserConfig["test"];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    rollupReplace({
      preventAssignment: true,
      values: { __DEV__: JSON.stringify(true), "process.env.NODE_ENV": JSON.stringify("development") },
    }),
    react(),
  ],

  server: { port: 3000 },
  build: {
    minify: false,
  },
  resolve: process.env.USE_SOURCE
    ? {
        alias: {
          "@remix-run/router": path.resolve(__dirname, "../../packages/router/index.ts"),
          "react-router": path.resolve(__dirname, "../../packages/react-router/index.ts"),
          "react-router-dom/server": path.resolve(__dirname, "../../packages/react-router-dom/server.tsx"),
          "react-router-dom": path.resolve(__dirname, "../../packages/react-router-dom/index.tsx"),
        },
      }
    : {
        alias: {
          "@assets/": "/static/",
          "@client/": "/src/client/",
        },
      },
});
