import logo from "./logo.svg";
import {useState } from "react";
import "./index.css";

// // Import components
// import "@arcgis/map-components/components/arcgis-map";
// import "@arcgis/map-components/dist/components/arcgis-zoom";
/// <reference types="@arcgis/map-components/types/react" />
// Import a core API module
// import Graphic from "@arcgis/core/Graphic.js";

export function Welcome() {
const [mapId, setMapId] = useState("f13dd01cc46b4dfcab6f21f0fea6f8b2");
const [mapName, setMapName] = useState("composite map");

  return (
    
    <main className="flex items-center justify-center pt-16 pb-4">
      
      <div>
      <img src={logo} alt="SPLC Logo" className="fixed top-1 h-[15vh] w-[20vw]"/>
      </div>
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
          </div>

          <h1>SPLC Risk Index Web Map</h1>

        </header>
        <div className="flex flex-col items-center text-2xl gap-2">
        <h1>{mapName}</h1>
      </div>
        <div className="fixed bottom-4 right-4 z-50">
        {/* <div className="h-[600px] w-[900px] border rounded-xl overflow-hidden shadow-lg relative"> */}
        <div className="h-[80vh] w-[80vw] overflow-hidden shadow-lg relative">
          <arcgis-map item-id={mapId}>
            <arcgis-zoom slot="bottom-right"></arcgis-zoom>
            <arcgis-search className="w-[30vw]" slot="top-right" id="county-search"></arcgis-search>

          </arcgis-map>
          <div className="absolute bottom-4 left-4 flex gap-2">
            <button 
              className="bg-white px-4 py-2 rounded shadow hover:bg-gray-100 text-black"
              onClick={() => {
                setMapId('28a868414f0243f99181e5796f21b1a7')
              setMapName("Demographics")}}
            >
              Demographic
            </button>
            <button 
              className="bg-white px-4 py-2 rounded shadow hover:bg-gray-100 text-black"
              onClick={() => {setMapId('356d101d5f6745e38d01aa6f560cf01e')
                setMapName("Infrastructure Access")}}
            >
              Infrastructure Access
            </button>
            
            <button 
              className="bg-white px-4 py-2 rounded shadow hover:bg-gray-100 text-black"
              onClick={() => {setMapId('d4a0083409af41a4a5748ab10d32c685')
                setMapName("Individual Capability")
              }
              }
            >
              Individual Capability
            </button>
            <button 
              className="bg-white px-4 py-2 rounded shadow hover:bg-gray-100 text-black"
              onClick={() => {setMapId('a94d4b6614db46bab337acb7167025a6')
                setMapName("Geographic Isolation")
              }
              }
            >
              Geographic Isolation
            </button>
            <button 
              className="bg-white px-4 py-2 rounded shadow hover:bg-gray-100 text-black"
              onClick={() => {setMapId('f13dd01cc46b4dfcab6f21f0fea6f8b2')
                setMapName("composite map")}
              }
            >
              Composite
            </button>
          </div>
        </div>
      </div>
      {/* stuff down here */}
      <h1>test</h1>
      </div>
    </main>
  );
}


