import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicio from "./Paginas/Inicio/Inicio.jsx";
import QueroDoar from "./Paginas/QueroDoar/QueroDoar.jsx";
import LivrosDoados from "./Paginas/LivrosDoados/LivrosDoados.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },
      {
        path: "/doacao",
        element: <QueroDoar />,
      },
      {
        path: "/livrosDoados",
        element: <LivrosDoados />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

