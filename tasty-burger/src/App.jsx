import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header.jsx'
import Home from './Component/Home.jsx'
import Footer from './Component/Footer.jsx'
import React from 'react'
import Applayout from './Component/Applayout.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      children:[
        {
        path: "/",
        element: <Home />
      }
    ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
