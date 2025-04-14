import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: mode === "production" ? "/Mon-Portfolio-Johan-Ternant/" : "/",
    plugins: [react()],
    build: {
      minify: "esbuild", //Minification rapide
      rollupOptions: {
        treeshake: true, //Active explicitement le tree shaking
      },
    },
  };
});
