// app/entry.client.tsx
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

// Register components ONLY on the client side
if (typeof window !== "undefined") {
  import("@arcgis/map-components/dist/components");
  import("@esri/calcite-components/dist/components");
}

hydrateRoot(document, <HydratedRouter />);