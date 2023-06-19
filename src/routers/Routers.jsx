import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home.jsx';
import Contact from '../pages/Contact.jsx';
import News from '../pages/News.jsx';
import Cart from '../pages/Cart.jsx';
import PageNotFound from '../pages/PageNotFound.jsx';
import Shop from '../pages/Shop.jsx';
import ProductDetails from '../pages/ProductDetails.jsx'
import NewsContent from '../pages/NewsContent.jsx';
import Signup from '../pages/Signup.jsx';
import App from '../App.jsx';
import Checkout from '../pages/Checkout.jsx';
import Login from '../pages/Login.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';

export const Routers = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/News',
          element: <News />
        },
        {
          path: 'News/:id',
          element: <NewsContent />
        },
        {
          path: '/Contact',
          element: <Contact />
        },
        {
          path: '/Cart',
          element: <Cart />
        },
        {
          path: '*',
          element: <PageNotFound />
        },
        {
          path: '/Login',
          element: <Login />
        },
        {
          path: '/Signup',
          element: <Signup />
        },
        {
          path: '/Shop',
          element: <Shop />
        },
        {
          path: 'Shop/:id',
          element: <ProductDetails />
        },
        {
          path: '/Checkout',
          element: <ProtectedRoute >
            <Checkout />
          </ProtectedRoute>
        }
      ]
    }
]);