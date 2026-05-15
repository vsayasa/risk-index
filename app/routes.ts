import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";


export default 
[layout("layouts/maps.tsx", 
    [index("routes/home.tsx"),
route("geographic","routes/geographic.tsx"),
route("demographic", "routes/demographic.tsx"),
route("infrastructure", "routes/infrastructure.tsx"),
route("individual", "routes/individual.tsx"),
])] satisfies RouteConfig;
