import { useNavigate } from 'react-router-dom'
import Logo from './Logo'

export default () => {
  const navigate = useNavigate()
  return (
    <div className="w-full columns-2 bg-gray-300 p-8">
      <div className="flex h-40 flex-col">
        <div className="h-20">
          <Logo position="footer" />
        </div>
        <p>created by Kobe</p>
      </div>
      <div className="columns-2">
        {/* pages */}
        <div>
          <ul>
            <li>
              <button
                onClick={() => navigate('/')}
                className="hover:underline focus:outline-none focus-visible:underline active:text-slate-400"
              >
                <p>Home</p>
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate('/about')}
                className="hover:underline focus:outline-none focus-visible:underline active:text-slate-400"
              >
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
                  window.open('mailto:kobe.despeghel@student.howest.be')
                }}
                className="hover:underline focus:outline-none focus-visible:underline active:text-slate-400"
              >
                <p>email</p>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  window.open(
                    'https://www.linkedin.com/in/kobe-despeghel-994849274/',
                    '_blank',
                  )
                }}
                className="hover:underline focus:outline-none focus-visible:underline active:text-slate-400"
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
