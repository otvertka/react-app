import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BikesPage from './pages/BikesPage';
import RootLayout from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import TradeinPage from './pages/TradeinPage';
import PartsPage from './pages/PartsPage';
import EquipmentsPage from './pages/EquipmentsPage';
import AccessoriesPage from './pages/AccessoriesPage';
import HeimtrainerPage from './pages/HeimtrainerPage';
import AboutusPage from './pages/AboutusPage';
import DeliveryPage from './pages/DeliveryPage';
import BlogPage from './pages/BlogPage';
import ContactsPage from './pages/ContactsPage';
import WorkshopPage from './pages/WorkshopPage';
import KeepingPage from './pages/KeepingPage';
import GuaranteesPage from './pages/GuaranteesPage';

import AuthenticationPage, {
} from './pages/AuthenticationPage';
import MyAccauntPage from './pages/MyAccauntPage';

import SingleAccsessPage from './pages/SingleAccsessPage';
import SingleBikePage from './pages/SingleBikePage';
import SinglePartPage from './pages/SinglePartPage';
import SingleEquipPage from './pages/SingleEquipPage';
import SingleHeimtrainerPage from './pages/SingleHeimtrainerPage';
import Cart from './pages/Cart';
import CheckoutPage from './pages/CheckoutPage';
import FavoritesPage from './pages/FavoritesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/bikes', element: <BikesPage /> },
      { path: '/bikes/:id', element: <SingleBikePage /> },
      { path: '/tradein', element: <TradeinPage /> },
      { path: '/parts', element: <PartsPage /> },
      { path: '/parts/:id', element: <SinglePartPage /> },
      { path: '/equipments', element: <EquipmentsPage /> },
      { path: '/equipments/:id', element: <SingleEquipPage /> },
      { path: '/accessorries', element: <AccessoriesPage /> },
      { path: '/accessorries/:id', element: <SingleAccsessPage /> },
      { path: '/heimtrainer', element: <HeimtrainerPage /> },
      { path: '/heimtrainer/:id', element: <SingleHeimtrainerPage /> },
      { path: '/about', element: <AboutusPage /> },
      { path: '/delivery', element: <DeliveryPage /> },
      { path: '/blog', element: <BlogPage /> },
      { path: '/contacts', element: <ContactsPage /> },
      { path: '/workshop', element: <WorkshopPage /> },
      { path: '/keeping', element: <KeepingPage /> },
      { path: '/quarantees', element: <GuaranteesPage /> },

      { path: '/auth', element: <AuthenticationPage /> },
      { path: '/favorites', element: <FavoritesPage /> },
      { path: '/cart', element: <Cart /> },
      { path: '/checkout', element: <CheckoutPage /> },
      { path: '/myaccaunt', element: <MyAccauntPage /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <RootLayout />
    </RouterProvider>
  );
}

export default App;
