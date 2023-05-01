import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default () => {
  const location = useLocation()
  const projectName = location.pathname.split('/')[2]

  return (
    <div>
      <Navbar />
      <div className="p-10">
        <h1 className="mb-4 text-center text-3xl font-bold">
          {projectName.toUpperCase()}
        </h1>
        <img
          src={`/images/${projectName}.jpg`}
          alt=""
          className="mb-4 w-full"
        />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
