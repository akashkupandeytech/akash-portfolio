function Contact() {
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="section-container">

          <div className="section-heading">
            <p>GET IN TOUCH</p>
            <h2>Let's <span>Connect</span></h2>
          </div>

          <div className="contact-grid">

            <div className="contact-intro">
              <h3>
                Have a project in mind?
              </h3>

              <p>
                I'm always interested in working on new projects,
                learning new technologies and creating useful
                digital experiences.
              </p>

              <div className="contact-details">
                <div>
                  <span>Email</span>
                  <strong>
                    your-email@gmail.com
                  </strong>
                </div>

                <div>
                  <span>Location</span>
                  <strong>India</strong>
                </div>
              </div>
            </div>

            <form className="contact-form">

              <div className="input-group">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                />
              </div>

              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                />
              </div>

              <div className="input-group">
                <label>Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button type="submit" className="send-btn">
                Send Message →
              </button>

            </form>

          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <p>
            © {new Date().getFullYear()} Akash Pandey. All rights reserved.
          </p>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;
