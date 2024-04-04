import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TanstackProvider from "./providers/TanstackProvider.tsx";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TanstackProvider>
      <Suspense
        fallback={
          <div>
            <div className="flex justify-center items-center h-screen">
              <h1>Loading Halaman...</h1>
            </div>
          </div>
        }
      >
        <RouterProvider router={routes} />
      </Suspense>
    </TanstackProvider>
  </React.StrictMode>
);
