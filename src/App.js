import "./App.css";
// import AppRouter from "./components/AppRouter";
import AppWrapper from "./components/Layout/AppWrapper";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Admin from "./pages/Admin";

// const router = createBrowserRouter([{ path: "/", element: <Admin /> }]);

function App() {
  return (
    <>
      <AppWrapper />
    </>
  );
}

export default App;
