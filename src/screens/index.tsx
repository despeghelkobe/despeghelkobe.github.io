import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'

//screens
import Home from './Home'
import About from './About'
import Contact from './Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
])

export default () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}
