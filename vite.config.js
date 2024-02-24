import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  root: "./",
  rollupOptions: {
    input: "./index.html",
  },
  build: {
    outDir: "dist",
    assetsDir: "",
    sourcemap: false,
    minify: true,
  },
});
