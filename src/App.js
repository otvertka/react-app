import "./App.css";
// import AppRouter from "./components/AppRouter";
// import AppWrapper from "./components/Layout/AppWrapper";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BikesPage from "./pages/BikesPage";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import TradeinPage from "./pages/TradeinPage";
import PartsPage from "./pages/PartsPage";
import EquipmentsPage from "./pages/EquipmentsPage";
import AccessoriesPage from "./pages/AccessoriesPage";
import BicyclestandsPage from "./pages/BicyclestandsPage";
import AboutusPage from "./pages/AboutusPage";
import DeliveryPage from "./pages/DeliveryPage";
import BlogPage from "./pages/BlogPage";
import ContactsPage from "./pages/ContactsPage";
import WorkshopPage from "./pages/WorkshopPage";
import KeepingPage from "./pages/KeepingPage";
import GuaranteesPage from "./pages/GuaranteesPage";

// import Admin from "./pages/Admin";
// import {BasketPage} from "./pages/BasketPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/bikes", element: <BikesPage /> },
      { path: "/tradein", element: <TradeinPage /> },
      { path: "/parts", element: <PartsPage /> },
      { path: "/equipments", element: <EquipmentsPage /> },
      { path: "/accessorries", element: <AccessoriesPage /> },
      { path: "/bicyclestands", element: <BicyclestandsPage /> },
      { path: "/about", element: <AboutusPage /> },
      { path: "/delivery", element: <DeliveryPage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/contacts", element: <ContactsPage /> },
      { path: "/workshop", element: <WorkshopPage /> },
      { path: "/keeping", element: <KeepingPage /> },
      { path: "/quarantees", element: <GuaranteesPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
