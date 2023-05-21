import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/portfolio/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="portfolio/proiecte" element={<ProjectsPage />} />
      <Route path="portfolio/contacte" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);