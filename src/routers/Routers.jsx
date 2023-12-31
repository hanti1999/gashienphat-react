import { createBrowserRouter } from 'react-router-dom';

import App from '../App.jsx';

import Home from '../pages/Home.jsx';
import Contact from '../pages/Contact.jsx';
import News from '../pages/News.jsx';
import Cart from '../pages/Cart.jsx';
import PageNotFound from '../pages/PageNotFound.jsx';
import Shop from '../pages/Shop.jsx';
import ProductDetails from '../pages/ProductDetails.jsx';
import NewsContent from '../pages/NewsContent.jsx';
import Login from '../pages/Login.jsx';
import Signup from '../pages/Sign-up.jsx';

import ProtectedRoute from './ProtectedRoute.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import Checkout from '../pages/Checkout.jsx';
import Dashboard from '../admin/Dashboard.jsx';
import AddProducts from '../admin/AddProducts.jsx';
import AllProducts from '../admin/AllProducts.jsx';
import Users from '../admin/Users.jsx';
import Orders from '../admin/Orders.jsx';

import BepGas from '../pages/Shop-bepGas.jsx';
import BepDien from '../pages/Shop-bepDien.jsx';
import DonTetSaleHet from '../pages/DonTetSaleHet.jsx';

export const Routers = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'news',
        element: <News />,
      },
      {
        path: 'news/:id',
        element: <NewsContent />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'shop/:id',
        element: <ProductDetails />,
      },
      {
        path: 'shop/bep-gas',
        element: <BepGas />,
      },
      {
        path: 'shop/bep-dien',
        element: <BepDien />,
      },
      {
        path: 'shop/may-loc-nuoc',
        element: <Shop />,
      },
      {
        path: 'checkout',
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      {
        path: '/*',
        element: <PrivateRoute />,
        children: [
          {
            path: 'dashboard',
            element: <Dashboard />,
          },
          {
            path: 'dashboard/all-products',
            element: <AllProducts />,
          },
          {
            path: 'dashboard/add-product',
            element: <AddProducts />,
          },
          {
            path: 'dashboard/users',
            element: <Users />,
          },
          {
            path: 'dashboard/orders',
            element: <Orders />,
          },
        ],
      },
    ],
  },
  {
    path: '/don-tet-sale-het',
    element: <DonTetSaleHet />,
    errorElement: <PageNotFound />,
  },
]);
