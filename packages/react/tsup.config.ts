import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/hooks/credits.ts",
    "src/hooks/buckets.ts",
    "src/actions/credits.ts",
  ],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  outExtension: ({ format }) => ({
    js: format === "esm" ? ".js" : ".cjs",
  }),
});
