import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import PhoneDetail from "./components/PhoneDetail.jsx";
import UpdatePhone from "./components/UpdatePhone.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/phones/:id",
    loader: ({ params }) => fetch(`http://localhost:3000/phones/${params.id}`),
    Component: PhoneDetail,
  },
  {
    path: "/update/:id",
    loader: ({ params }) => fetch(`http://localhost:3000/phones/${params.id}`),
    Component: UpdatePhone,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);
