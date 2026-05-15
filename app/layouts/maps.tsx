import { Outlet } from "react-router";
import logo from "../logo.svg";


export default function Maps() {

 
    return (
      <main className="flex items-center justify-center pt-16 pb-4 min-h-screen">
<div className="fixed top-14 flex justify-center">
<h1 className="text-2xl font-bold tracking-tight text-gray-800">SPLC Risk Index Map</h1>
  </div>
  <div className="fixed top-4 left-4 flex flex-col gap-4 z-50">

    <img 
      src={logo} 
      alt="Logo" 
      className="h-[12vh] w-auto object-contain self-start" 
    />

  <div className="fixed bottom-4 right-4 z-50">
        
    <Outlet />

  </div>
  </div>
</main>

    );
}