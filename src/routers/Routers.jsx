import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home.jsx';
import Contact from '../pages/Contact.jsx';
import News from '../pages/News.jsx';
import Cart from '../pages/Cart.jsx';
import PageNotFound from '../pages/PageNotFound.jsx';
import SignIn from '../pages/SignIn.jsx';
import SignUp from '../pages/SignUp.jsx';
import Shop from '../pages/Shop.jsx';
import ProductDetails from '../pages/ProductDetails.jsx'
import NewsContent from '../pages/NewsContent.jsx';

import App from '../App.jsx'

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
          path: '/SignIn',
          element: <SignIn />
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
          path: '/SignUp',
          element: <SignUp />
        }
      ]
    }
]);