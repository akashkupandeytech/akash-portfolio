function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-container">
        <div className="section-heading">
          <p>GET TO KNOW ME</p>
          <h2>About <span>Me</span></h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <h3>I'm Akash Pandey, a Full Stack Developer.</h3>

            <p>
              I am an IT student passionate about web development,
              software development and building real-world projects.
              I enjoy learning new technologies and converting ideas
              into useful digital products.
            </p>

            <p>
              My current focus is on the MERN stack, modern frontend
              development and improving my problem-solving skills.
            </p>

            <a href="#contact" className="about-btn">
              Let's Connect →
            </a>
          </div>

          <div className="about-info">
            <div className="info-item">
              <span>Name</span>
              <strong>Akash Pandey</strong>
            </div>

            <div className="info-item">
              <span>Role</span>
              <strong>Full Stack Developer</strong>
            </div>

            <div className="info-item">
              <span>Stack</span>
              <strong>MERN</strong>
            </div>

            <div className="info-item">
              <span>Focus</span>
              <strong>Web Development</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
