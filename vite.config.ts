import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],

  ssr: {
    noExternal: [
      "styled-components",
      "@esri/calcite-components",
      "@arcgis/map-components",
    ],
  },
  optimizeDeps: {
    include: ["@arcgis/map-components/dist/components"],
  },
});