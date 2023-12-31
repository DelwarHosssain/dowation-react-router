import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layeout/MainLayout';
import Home from './Page/Home/Home';
import Donation from './Page/Donation/Donation';
import Statistics from './Page/Statistics/Statistics';
import DonentData from './Page/DonentData/DonentData';
import ErrorPage from './component/ErrorPage/ErrorPage';





const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('/public/Card.json')
      },
      {
        path:"/Donation",
        element:<Donation></Donation>
      },
      {
        path:"/Statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/cards/:id",
        element:<DonentData></DonentData>,
        loader:()=> fetch('/public/Card.json')
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
