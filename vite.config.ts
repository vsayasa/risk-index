import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  // Add this to handle the "Unknown file extension .css"
  ssr: {
    noExternal: [
      "styled-components",
      "@esri/calcite-components",
      "@arcgis/map-components",
      // "@stencil/core", // ArcGIS components are built with Stencil, often needs this
    ],
  },
  optimizeDeps: {
    include: ["@arcgis/map-components/dist/components"],
  },
});