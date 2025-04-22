import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

//https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    base: "/", //important pour un domaine personnalisé
    plugins: [
      react(),
      ViteImageOptimizer({
        includePublic: true,
        logStats: true,
        cache: true,
        cacheLocation: "./.image-cache", //Dossier de cache
        png: { quality: 80 },
        jpeg: { quality: 80 },
        webp: { lossless: true },
        avif: { lossless: true },
        svg: {
          multipass: true,
          plugins: [
            {
              name: "preset-default",
              params: {
                overrides: {
                  removeViewBox: false,
                },
              },
            },
            "sortAttrs",
          ],
        },
      }),
    ],
    build: {
      minify: "esbuild",
      rollupOptions: {
        treeshake: true,
      },
    },
  };
});
