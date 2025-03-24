import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Compare from './components/Compare/Compare.jsx';
import { Bounce, Slide, ToastContainer} from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/details/:productId',
        element:<ProductDetails></ProductDetails>,
        loader:()=>fetch('/products.json'),
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        loader:()=>fetch('/products.json'),
      },
      {
        path:'/compare',
        element:<Compare></Compare>,
        loader:()=>fetch('/products.json'),
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
     <ToastContainer position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Slide}/>
  </StrictMode>,
)
