import type { Route } from "./+types/home";
import Composite from "./composite";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Composite Risk Index" },
    { name: "description", content: "SPLC risk index map" },
  ];
}

export default function Home() {
  return <Composite />;
}
