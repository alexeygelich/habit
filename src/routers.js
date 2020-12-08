import { lazy } from "react";

const routers = [
  {
    path: "/",
    exact: true,
    component: lazy(() => import("./components/Authentification")),
  },
  {
    path: "/registr",
    exact: false,
    component: lazy(() => import("./components/Registration")),
  },
  {
    path: "/login",
    exact: true,
    component: lazy(() => import("./components/Logazination")),
  },
  {
    path: "/profile",
    exact: true,
    component: lazy(() => import("./components/Profile")),
  }
];

export default routers;
