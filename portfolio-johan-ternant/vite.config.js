import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  //export default defineConfig(() => {
  return {
    base: mode === "production" ? "/portfolio-johan-ternant/" : "/",
    //base: "/", //important pour un domaine personnalisé
    plugins: [react()],
    build: {
      minify: "esbuild", //Minification rapide
      rollupOptions: {
        treeshake: true, //Active explicitement le tree shaking
      },
    },
  };
});
