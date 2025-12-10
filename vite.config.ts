import { resolve } from "path";

import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/ExternalComponent.tsx"),
      name: "ExternalComponent",
      formats: ["es"],
      fileName: "external-component",
    },
    minify: false,
    sourcemap: false,
    outDir: resolve(__dirname, "dist"),
    reportCompressedSize: false,
  },
});
