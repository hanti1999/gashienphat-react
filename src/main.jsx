import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import News from './pages/News.jsx';
import Cart from './pages/Cart.jsx';
import PageNotFound from './pages/PageNoteFound.jsx';
import SignIn from './pages/SignIn.jsx';

const router = createBrowserRouter([
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
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
