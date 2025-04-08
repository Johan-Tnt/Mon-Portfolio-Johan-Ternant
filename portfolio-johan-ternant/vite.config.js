import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//https://vite.dev/config/
export default defineConfig({
  //Définit la base en fonction de l'environnement : En production, la base est "/Mon-Portfolio-Johan-Ternant/" et en développement, la base est "/"
  base:
    import.meta.env.MODE === "production"
      ? "/Mon-Portfolio-Johan-Ternant/"
      : "/",
  plugins: [react()],
  build: {
    minify: "esbuild", //Minification rapide
    rollupOptions: {
      treeshake: true, //Active explicitement le tree shaking
    },
  },
});
