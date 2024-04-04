import { createBrowserRouter } from "react-router-dom";
import RootLayouts from "./app/(root)/RootLayouts";
import { Home, Playlist } from "./app/(root)/pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "playlist/:id",
        element: <Playlist />,
      },
    ],
  },
]);
