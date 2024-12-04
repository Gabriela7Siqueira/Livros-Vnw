import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import QueroDoar from "./Paginas/QueroDoar/QueroDoar.jsx";
import LivrosDoados from "./Paginas/LivrosDoados/LivrosDoados.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/livrosDoados",
    element: <LivrosDoados />,
  },
  {
    path: "/queroDoar",
    element: <QueroDoar />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
