// import imageLocation from '../images/rc-car.jpg'

export default () => {
  return (
    <div>
      <p className="font-semibold">
        An rc-car that I modified to add extra functionalities. of the car so
        that it is more exciting to drive.
      </p>
      <div className="mt-8 flex gap-4">
        <article className="mb-4 w-1/2">
          <h2 className="font-bold">extra functionalities</h2>
          <p>
            I put a raspberry Pi in the car where I ran a website that you could
            access via the local network. There were also several sensors added
            to the car such as the ultrasonic sensor and the voltage sensor.
          </p>
          <p>
            The ultrasonic sensor was used to detect obstacles and break before
            hitting them. The voltage sensor was used to detect when the battery
            was low and it was then displayed on the website. There was also a
            hall sensor to detect the speed of the car.
          </p>
        </article>
        <div>
          <h2 className="font-bold">links</h2>
          <ul>
            <li>
              <button
                onClick={() =>
                  window.open(
                    'https://www.instructables.com/Smart-RC-car/',
                    '_blank',
                  )
                }
              >
                instructables
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  window.open(
                    'https://github.com/howest-mct/2021-2022-projectone-despeghelkobe',
                    '_blank',
                  )
                }
              >
                code
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
