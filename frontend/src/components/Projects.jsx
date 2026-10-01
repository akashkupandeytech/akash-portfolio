const projects = [
  {
    number: "01",
    title: "KisanSlot",
    description:
      "A MERN-based platform for farmers to manage registrations, slots, payments and agricultural services.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    type: "MERN PROJECT",
    live: "https://kisanslot.vercel.app/",
    github: "https://github.com/akashkupandeytech",
  },
  {
    number: "02",
    title: "Crop Recommendation System",
    description:
      "A machine learning application that recommends suitable crops based on agricultural and soil parameters using Random Forest.",
    tech: ["Python", "Machine Learning", "Random Forest"],
    type: "DATA SCIENCE",
    live: "https://crop-recommendation-system-fwxu.onrender.com",
    github: "https://github.com/akashkupandeytech",
  },
  {
    number: "03",
    title: "HNBGU Student Resource Hub",
    description:
      "A student-focused platform designed to provide useful academic resources through a modern and responsive web interface.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    type: "WEB APPLICATION",
    live: "#",
    github: "https://github.com/akashkupandeytech",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-container">

        {/* Heading */}
        <div className="section-heading">
          <p>SELECTED WORK</p>

          <h2>
            Featured <span>Projects</span>
          </h2>
        </div>

        {/* Projects */}
        <div className="projects-list">

          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >

              {/* Number */}
              <div className="project-number">
                {project.number}
              </div>

              {/* Content */}
              <div className="project-content">

                <p className="project-type">
                  {project.type}
                </p>

                <h3>
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="project-tech">
                  {project.tech.map((item) => (
                    <span key={item}>
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="project-actions">

                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link primary-project-link"
                    >
                      Live Demo
                      <span>↗</span>
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link secondary-project-link"
                  >
                    GitHub
                    <span>↗</span>
                  </a>

                </div>

              </div>

              {/* Decoration */}
              <div className="project-decoration">
                ↗
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;