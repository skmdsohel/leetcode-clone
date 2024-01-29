// import { useState } from 'react'
import { Route, Routes, BrowserRouter, RouteObject, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Landing from './components/Landing'
import Signin from './components/Signin'
import Signup from './components/Signup'

function App() {
  // const [count, setCount] = useState(0)

  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Signin />
    },
    {
      path:'signup',
      element: <Signup/>
    }
  ];

  const router = createBrowserRouter(routes)


  return (
    <>

    <RouterProvider router={router}/>

    </>
  );
}

export default App
