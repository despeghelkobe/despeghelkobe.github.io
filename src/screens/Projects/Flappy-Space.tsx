export default () => {
  return (
    <div>
      <p className="font-semibold">
        This was a teamproject that we had to do in a group of 4 where we had to
        make a game that you can play using a trampoline and a screen.
      </p>
      <div className="mt-8 flex gap-4">
        <article className="mb-4 w-1/2">
          <h2 className="font-bold">How it works</h2>
          <p>
            There was a sensor under the trampoline that would detect when you
            jumped on it. That would then make the bird jump. We also had to add
            a few buttons for navigating the menus.
          </p>
          <p>
            We added a multiplayer mode where you could play against each other
            on 2 trampolines. You could save your high score on the website and
            view the leaderboards.
          </p>
        </article>
        <article className="w-1/2">
          <h2 className="font-bold">My tasks</h2>
          <p>
            because everyone of the group did the same degree there was a lot of
            overlap of what each one of us did. But the things I worked on the
            most were placing the website online, making sure the game received
            the data from the sensor over a connection between an esp32 where
            the sensor was connected to and the raspberry pi where the game was
            running on.
          </p>
        </article>
      </div>
    </div>
  )
}
