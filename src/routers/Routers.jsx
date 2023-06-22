import { createBrowserRouter } from 'react-router-dom';

import App from '../App.jsx';

import Home from '../pages/Home.jsx';
import Contact from '../pages/Contact.jsx';
import News from '../pages/News.jsx';
import Cart from '../pages/Cart.jsx';
import PageNotFound from '../pages/PageNotFound.jsx';
import Shop from '../pages/Shop.jsx';
import ProductDetails from '../pages/ProductDetails.jsx'
import NewsContent from '../pages/NewsContent.jsx';
import Login from '../pages/Login.jsx';
import Signup from '../pages/Sign-up.jsx';

import ProtectedRoute from './ProtectedRoute.jsx'; 
import Checkout from '../pages/Checkout.jsx';
import Dashboard from '../admin/Dashboard.jsx'
import AddProducts from '../admin/AddProducts.jsx';
import AllProducts from '../admin/AllProducts.jsx';

export const Routers = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <PageNotFound />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'news',
          element: <News />
        },
        {
          path: 'news/:id',
          element: <NewsContent />
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path: 'cart',
          element: <Cart />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'signup',
          element: <Signup />
        },
        {
          path: 'shop',
          element: <Shop />
        },
        {
          path: 'shop/:id',
          element: <ProductDetails />
        },
        {
          path: '/*',
          element: <ProtectedRoute />,
          children: [
            {
              path: 'checkout',
              element: <Checkout />
            },
            {
              path: 'dashboard',
              element: <Dashboard />
            },
            {
              path: 'dashboard/all-products',
              element: <AllProducts />
            },
            {
              path: 'dashboard/add-product',
              element: <AddProducts />
            }
          ]
        },
      ]
    }
]);