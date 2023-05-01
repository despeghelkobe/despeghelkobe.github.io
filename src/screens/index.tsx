import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'

//screens
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Project from './Projects/RC-Car'
import ProjectContainer from '../components/ProjectContainer'
import FlappySpace from './Projects/Flappy-Space'

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
    path: '/projects',
    element: <ProjectContainer />,
    children: [
      {
        path: 'rc-car',
        element: <Project />,
      },
      {
        path: 'flappy-space',
        element: <FlappySpace />,
      },
    ],
  },
  // {
  //   path: '/contact',
  //   element: <Contact />,
  // },
])

export default () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}
