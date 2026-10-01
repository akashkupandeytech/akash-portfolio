import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL || "";

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("Message sent successfully! ✓");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("Unable to connect to server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="contact-section" id="contact">
        <div className="section-container">

          {/* Heading */}
          <div className="section-heading">
            <p>GET IN TOUCH</p>

            <h2>
              Let's <span>Connect</span>
            </h2>
          </div>

          <div className="contact-grid">

            {/* LEFT SIDE */}
            <div className="contact-intro">

              <p className="contact-label">
                HAVE A PROJECT IN MIND?
              </p>

              <h3>
                Let's build something
                <span> meaningful.</span>
              </h3>

              <p className="contact-description">
                I'm always interested in working on new projects,
                learning new technologies and creating useful
                digital experiences.
              </p>

              {/* Contact Details */}
              <div className="contact-details">

                <div className="contact-detail-item">
                  <span>Email</span>

                  <a href="mailto:akash.ku.pandey.tech@gmail.com">
                    akash.ku.pandey.tech@gmail.com
                  </a>
                </div>

                <div className="contact-detail-item">
                  <span>Location</span>

                  <strong>India</strong>
                </div>

                <div className="contact-detail-item">
                  <span>Availability</span>

                  <strong className="available">
                    ● Available for projects
                  </strong>
                </div>

              </div>

              {/* Social Links */}
              <div className="contact-social">

                <a
                  href="https://github.com/akashkupandeytech"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>

              </div>
            </div>

            {/* RIGHT SIDE - FORM */}
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="input-group">
                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="message">
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="send-btn"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>

              {status && (
                <p
                  className={`form-status ${
                    status.includes("successfully")
                      ? "success"
                      : "error"
                  }`}
                >
                  {status}
                </p>
              )}

            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">

          <p>
            © {new Date().getFullYear()} Akash Pandey.
            All rights reserved.
          </p>

          <div className="footer-links">
            <a href="#home">Home</a>

            <a href="#projects">
              Projects
            </a>

            <a href="#contact">
              Contact
            </a>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Contact;
