import { Link } from "react-router";

export default function Composite() {
  return (
    <main>
    <div className="fixed left-4 z-50 flex flex-col gap-2 bg-white p-4 w-64">
        <h1 className="text-center font-bold text-gray-400 uppercase text-xs tracking-widest">
          Legend
        </h1>
        <arcgis-legend reference-element="map"></arcgis-legend>

        <div className="h-px bg-gray-200 w-full my-2"></div>

        <h1 className="text-center font-bold text-gray-400 uppercase text-xs tracking-widest">
          Indices
        </h1>

        <Link to="/geographic" className="bg-white text-black px-4 py-2 rounded shadow">
          Geographic
        </Link>
        <Link to="/demographic" className="bg-white text-black px-4 py-2 rounded shadow">
          Demographic
        </Link>
        <Link to="/individual" className="bg-white text-black px-4 py-2 rounded shadow">
          Individual
        </Link>
        <Link to="/infrastructure" className="bg-white text-black px-4 py-2 rounded shadow">
          Infrastructure
        </Link>
        <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded shadow">
          Composite
        </Link>
      </div>
  <div className="bottom-4 right-4 z-50 h-[80vh] w-[80vw] border rounded-xl overflow-hidden shadow-lg relative">
          <arcgis-map id="map" item-id="f13dd01cc46b4dfcab6f21f0fea6f8b2">
                      


            <arcgis-zoom slot="bottom-right"></arcgis-zoom>
            <arcgis-search className="w-[30vw]" slot="top-right" id="county-search"></arcgis-search>

          </arcgis-map>
          
        </div>
        </main>
);
}
