import { useNavigate } from 'react-router-dom'

//components
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default () => {
  const navigate = useNavigate()
  return (
    <div className="h-screen">
      <Navbar />
      <div className="p-20">
        <h1 className="mb-10 text-2xl font-bold">
          Hey! I'm Kobe I'm a web designer based in Belgium. I like to keeps
          things simple and minimal for an optimal user experience.
        </h1>
        <h2 className="mb-4 text-xl font-bold">Some of my projects</h2>
        <div className="flex gap-4">
          <button
            onClick={() => navigate('/projects/rc-car')}
            className="w-1/2 rounded-xl border-2 focus:outline-none focus-visible:border-slate-400"
          >
            <article className="rounded-xl bg-slate-50 p-4 hover:shadow-inner  ">
              <img
                src="/images/rc-car.jpg"
                alt="picture of the rc-car that I modified"
                className="w-full rounded-xl"
              />
              <div>
                <h3 className="text-lg font-semibold">IoT RC-car</h3>
                <p>
                  Modified an RC-car with a raspberry pi and sensors to make it
                  have extra functionalities
                </p>
              </div>
            </article>
          </button>
          <button
            onClick={() => navigate('/projects/flappy-space')}
            className="w-1/2 rounded-xl border-2 focus:outline-none focus-visible:border-slate-400"
          >
            <article className="rounded-xl  bg-slate-50 p-4 hover:shadow-inner">
              <img
                src="/images/flappy-space.jpg"
                alt="a screenshot of the 2 player game mode in flappy space"
                className="w-full"
              />
              <h3 className="text-lg font-semibold">flappy space</h3>
              <p>
                Made a game of flappy bird that you can play on a trampoline.
              </p>
            </article>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
