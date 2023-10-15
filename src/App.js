import "./App.css";
// import AppRouter from "./components/AppRouter";
// import AppWrapper from "./components/Layout/AppWrapper";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BikesPage from "./pages/BikesPage";
import RootLayout from "./pages/Root";

// import Admin from "./pages/Admin";
// import {BasketPage} from "./pages/BasketPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/bikes", element: <BikesPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
