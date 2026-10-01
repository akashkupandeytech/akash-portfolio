import profileImage from "../Akash.png";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background Decorations */}
      <div className="hero-circle circle-left"></div>
      <div className="hero-circle circle-right"></div>

      <div className="hero-dots">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="hero-container">

        {/* ================= LEFT CONTENT ================= */}
        <div className="hero-content">

          <p className="hero-small">
            HELLO, I'M
            <span className="hero-line"></span>
          </p>

          <h1>
            AKASH
            <span>PANDEY</span>
          </h1>

          <h2>
            Full Stack <span>Developer</span>
          </h2>

          <p className="hero-description">
            I build modern, responsive and scalable web applications
            using the MERN stack. I love turning ideas into clean
            and interactive digital experiences.
          </p>

          {/* ================= BUTTONS ================= */}
          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn primary-btn"
            >
              View My Work
              <span>→</span>
            </a>

            <a
              href="#contact"
              className="btn secondary-btn"
            >
              Contact Me
              <span>✉</span>
            </a>

          </div>

          {/* ================= SOCIAL LINKS ================= */}
          <div className="hero-social">

            <a
              href="https://github.com/akashkupandeytech"
              target="_blank"
              rel="noreferrer"
            >
              <span className="social-icon">◉</span>
              GitHub
            </a>

            <div className="social-divider"></div>

            <a
              href="https://www.linkedin.com/in/akashkupandeytech/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="social-icon">in</span>
              LinkedIn
            </a>

          </div>

        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="hero-image">

          <div className="image-frame">

            <img
              src={profileImage}
              alt="Akash Pandey"
              className="profile-image"
            />

          </div>

          {/* Decorative Borders */}
          <div className="frame-border border-one"></div>

          <div className="frame-border border-two"></div>

          {/* Glow Dots */}
          <div className="glow-dot dot-one"></div>

          <div className="glow-dot dot-two"></div>

        </div>

      </div>

    </section>
  );
}

export default Hero;