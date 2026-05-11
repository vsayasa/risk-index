import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";

// // Import components
// import "@arcgis/map-components/components/arcgis-map";
// import "@arcgis/map-components/dist/components/arcgis-zoom";
/// <reference types="@arcgis/map-components/types/react" />
// Import a core API module
// import Graphic from "@arcgis/core/Graphic.js";

export function Welcome() {


  // const handleViewReady = (event) => {
  //   const viewElement = event.target;

  //   // ...

  //   // Create a graphic and add the geometry and symbol to it
  //   const pointGraphic = new Graphic({
  //     geometry: point, // A point geometry
  //     symbol: markerSymbol, // A symbol for drawing the point
  //   });

  //   viewElement.graphics.add(pointGraphic);
  // };
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            {/* <arcgis-map
        item-id="02b37471d5d84cacbebcccd785460e94"
        onarcgisViewReadyChange={handleViewReady}
    >
      <arcgis-zoom slot="top-left" />
    </arcgis-map> */}
          </div>
        </header>
        <div className="h-[300px] w-[500px] border rounded-xl overflow-hidden shadow-lg">
          <arcgis-map item-id="f13dd01cc46b4dfcab6f21f0fea6f8b2">
  <arcgis-zoom slot="top-left"></arcgis-zoom>
</arcgis-map> 
           {/* Below is proof of concept for ArcGIS integration */}
            {/* <iframe width="500" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
src="https://www.arcgis.com/home/item.html?id=28a868414f0243f99181e5796f21b1a7"></iframe> */}
        </div>
        
      </div>
    </main>
  );
}


