import { useLocation, useNavigate } from 'react-router-dom'
import Logo from './Logo'

export default () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className="flex h-20 items-center justify-between px-8 shadow">
      <Logo position="navbar" />
      <ul className="flex h-full items-center gap-8">
        <li className="h-full">
          <button
            className={`h-full border border-y-0 border-transparent p-4 hover:border-gray-300 focus:outline-none focus-visible:border-gray-300 focus-visible:shadow-inner active:shadow-inner  ${
              location.pathname === '/' ? 'font-bold' : ''
            }`}
            onClick={() => navigate('/')}
          >
            Work
          </button>
        </li>
        <li className="h-full">
          <button
            className={`h-full border border-y-0 border-transparent p-4 hover:border-gray-300 focus:outline-none focus-visible:border-gray-300 focus-visible:shadow-inner active:shadow-inner ${
              location.pathname === '/about' ? 'font-bold' : ''
            }`}
            onClick={() => navigate('/about')}
          >
            About
          </button>
        </li>
        {/* <li className="h-full">
          <button
            className={`h-full border border-y-0 border-transparent  p-4 hover:border-gray-300 focus:outline-none focus-visible:border-gray-300 focus-visible:shadow-inner active:shadow-inner${
              location.pathname === '/contact' ? 'font-bold' : ''
            }`}
            onClick={() => navigate('/contact')}
          >
            Contact
          </button>
        </li> */}
      </ul>
    </div>
  )
}
