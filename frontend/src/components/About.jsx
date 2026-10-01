function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-container">

        {/* Heading */}
        <div className="section-heading">
          <p>ABOUT ME</p>
          <h2>
            Who <span>I Am</span>
          </h2>
        </div>

        <div className="about-grid">

          {/* LEFT */}
          <div className="about-text">

            <h3>
              I'm Akash Pandey, a Full Stack Developer who enjoys
              building modern web applications.
            </h3>

            <p>
              I am a B.Tech IT student interested in web development,
              software development and modern technologies.
            </p>

            <p>
              I work with technologies like React.js, Node.js,
              Express.js and MongoDB to create responsive, scalable
              and user-friendly applications.
            </p>

            <p>
              I enjoy learning new technologies and turning ideas
              into practical digital products.
            </p>

          </div>

          {/* RIGHT */}
          <div className="about-info">

            <div className="info-item">
              <span>Name</span>
              <strong>Akash Pandey</strong>
            </div>

            <div className="info-item">
              <span>Education</span>
              <strong>B.Tech — Information Technology</strong>
            </div>

            <div className="info-item">
              <span>Role</span>
              <strong>Full Stack Developer</strong>
            </div>

            <div className="info-item">
              <span>Stack</span>
              <strong>MERN Stack</strong>
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