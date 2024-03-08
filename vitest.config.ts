/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, coverageConfigDefaults } from "vitest/config";
export default defineConfig({
  test: {
    globals: true,
    include: [
      "./src/__tests__/**/*.test.tsx",
      "./src/__tests__/**/*.test.ts",
      "./src/__tests__/**/*.spec.ts",
      "./src/__tests__/**/*.spec.tsx",
    ],

    reporters: ["tap", "json", "junit"],
    outputFile: {
      junit: "./.test/__reports__/report.xml",
      json: "./.test/__reports__/report.json",
    },
    testTimeout: 10000,
    chaiConfig: {
      truncateThreshold: 999,
    },
    coverage: {
      enabled: true,
      provider: "v8",
      reporter: ["text", "json", "html"],
      reportsDirectory: "./.test/__coverage__",
      exclude: ["src/main.tsx", "src/*.ts", ...coverageConfigDefaults.exclude],
    },
  },
});
