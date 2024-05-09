import "./styles/App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from "./pages/MainPage";
import TableTop from "./pages/TableTop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />
  },
  {
    path: "/tabletop",
    element: <TableTop />
  },
  {
    path: "/*",
    element: <h1 style={{ color: "white" }}>404</h1>
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
