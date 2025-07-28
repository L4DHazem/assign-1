import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About/About'
import Portofolio from './components/Portofolio/Portofolio'
import Contact from './components/Contact/Contact'

function App() {

  const router = createBrowserRouter([

    { index: true, element: <Home /> },
    { path: '/Home', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/portofolio', element: <Portofolio /> },
    {path: '/contact', element: <Contact /> },
    { path: '*', element: <h1 className='text-center text-danger'>404 Not Found</h1> }


  ])


  return <>

    <RouterProvider router={router} />


  </>


}

export default App
