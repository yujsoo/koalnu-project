import mainVideo from '../assets/landing_bg.mp4';

const LandingPage = () => {
  return (
      <main>
        <section className="video-container">
          <video className="video" width="100%" autoPlay muted loop playsInline>
            <source src={mainVideo} type="video/mp4"/>
          </video>
        </section>
      </main>
  )
}

export default LandingPage;