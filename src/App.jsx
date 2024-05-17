import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])

export default function() {
  return (
    <RouterProvider router={router} />
  )
}
