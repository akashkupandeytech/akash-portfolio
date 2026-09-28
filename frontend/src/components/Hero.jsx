function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">
          <p className="hero-small">
            HELLO, I'M
          </p>

          <h1>
            AKASH
            <span> PANDEY</span>
          </h1>

          <h2>
            Full Stack <span>Developer</span>
          </h2>

          <p className="hero-description">
            I build modern, responsive and scalable web applications
            using the MERN stack. I love turning ideas into clean
            and interactive digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View My Work
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="hero-social">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-circle">
            <div className="image-placeholder">
              AP
            </div>
          </div>

          <div className="floating-card card-one">
            React.js
          </div>

          <div className="floating-card card-two">
            Node.js
          </div>

          <div className="floating-card card-three">
            MongoDB
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
