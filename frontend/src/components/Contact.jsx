import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("FORM SUBMITTED");

    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully! ✅");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Unable to connect to server.");
    }
  };

  return (
    <>
      <section className="contact-section" id="contact">
        <div className="section-container">

          <div className="section-heading">
            <p>GET IN TOUCH</p>
            <h2>
              Let's <span>Connect</span>
            </h2>
          </div>

          <div className="contact-grid">

            <div className="contact-intro">
              <h3>Have a project in mind?</h3>

              <p>
                I'm always interested in working on new projects,
                learning new technologies and creating useful
                digital experiences.
              </p>

              <div className="contact-details">

                <div>
                  <span>Email</span>
                  <strong>your-email@gmail.com</strong>
                </div>

                <div>
                  <span>Location</span>
                  <strong>India</strong>
                </div>

              </div>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="input-group">
                <label>Name</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="input-group">
                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </div>

              <div className="input-group">
                <label>Message</label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="send-btn"
              >
                Send Message →
              </button>

              {status && (
                <p className="form-status">
                  {status}
                </p>
              )}

            </form>

          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">

          <p>
            © {new Date().getFullYear()} Akash Pandey.
            All rights reserved.
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