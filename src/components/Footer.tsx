import { useNavigate } from 'react-router-dom'
import Logo from './Logo'

export default () => {
  const navigate = useNavigate()
  return (
    <div className="w-full columns-2 bg-gray-300 p-8">
      <div className="flex h-40 flex-col">
        <div className="h-20">
          <Logo />
        </div>
        <p>created by Kobe</p>
      </div>
      <div className="columns-2">
        {/* pages */}
        <div>
          <ul>
            <li>
              <button onClick={() => navigate('/')}>
                <p>Home</p>
              </button>
            </li>
            <li>
              <button onClick={() => navigate('/about')}>
                <p>About</p>
              </button>
            </li>
            {/* <li>
              <button onClick={() => navigate('/contact')}>
                <p>Contact</p>
              </button>
            </li> */}
          </ul>
        </div>
        {/* socials */}
        <div>
          <ul>
            <li>
              <button
                onClick={() => {
                  window.location.href =
                    'mailto:kobe.despeghel@student.howest.be'
                }}
              >
                <p>email</p>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  window.location.href =
                    'https://www.linkedin.com/in/kobe-despeghel-994849274/'
                }}
              >
                <p>LinkedIn</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
