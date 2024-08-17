import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main.jsx';
import SignUp from './components/Registration/SignUp.jsx';
import Login from './components/Login/Login.jsx';
import AllProduct from './components/DummyProduct/AllProduct.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Login></Login>,
      },
      {
        path:'/register',
        element:<SignUp></SignUp>,
      },
      {
        path:'/dummy',
        element:<AllProduct></AllProduct>,
        loader:()=>fetch('http://localhost:5000/count')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>,
)
