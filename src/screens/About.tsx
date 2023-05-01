import Navbar from '../components/Navbar'
import techImage from '../images/technology.jpg'
import handballImage from '../images/handball.jpg'
import Footer from '../components/Footer'

export default () => {
  return (
    <div className="">
      <Navbar />
      <div className="mx-auto my-8 grid max-w-4xl grid-cols-2 gap-8">
        <h1 className="col-span-2 text-center text-4xl font-bold">
          I'm Kobe a web & app designer.
        </h1>
        <img
          src="https://www.revixpert.ch/app/uploads/portrait-placeholder.jpg"
          alt="placeholder for self portrait"
          className="max-h-80  justify-self-end"
        />
        <article>
          <h2 className="text-lg font-bold">A litle bit about myself!</h2>
          <p className="mb-4">
            I'm currently studying at the Howest in Kortrijk, Belgium where i'm
            persuing a bacholor's degree in Multimedia & creative technologies.
          </p>
          <p className="mb-4">
            My skills are very diverse in the field of computer science. I can
            make a website, app, back-end, IoT device, .... I'm also very
            interested in electronics and I have a basic knowledge of it.
          </p>
          <p className="mb-4">
            I have always liked science in general but I have a special interest
            for space and the universe, I have always liked the idea that there
            is a lot more to our surroundings than we know. I also like
            geography and history, I like that we are stil so dependant on our
            past and the world around us.
          </p>
        </article>
        <article>
          <h2 className="text-lg font-bold">My skils</h2>
          <p>
            <span className="font-semibold">ui/ux design - </span>I make simple
            and yet beautiful designs that are easy to work with and don't leave
            the sites visitors confused.
          </p>
          <p>
            <span className="font-semibold">back-end developer - </span>I can
            make a robust back-end for your website and other services in
            asp.net.
          </p>
          <p>
            <span className="font-semibold">IoT-developer - </span>I have the
            skills required to make a helpful internet of things device with all
            the bells and whistles someone could ever want.
          </p>
          <p>
            <span className="font-semibold">electronics - </span>I know the
            basics of electronics so I can help make basic projects.
          </p>
        </article>
        <img src={techImage} alt="image with javascript code" />
        <img
          src={handballImage}
          alt="image of person holding a handball in front of a goal"
          className="max-h-40  justify-self-end"
        />
        <article>
          <h2 className="text-lg font-bold">My hobbies</h2>
          <p>
            <span className="font-semibold">handball - </span>I have played
            handball since I was 10 and I have never stopped loving it.
          </p>
          <p>
            <span className="font-semibold">Chiro - </span>I have only been in
            the Chiro for 7 years but I have picked up some unforgettable
            memories and skills there.
          </p>
        </article>
      </div>
      <Footer />
    </div>
  )
}
