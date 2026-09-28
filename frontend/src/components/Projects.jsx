const projects = [
  {
    number: "01",
    title: "KisanSlot",
    description:
      "A MERN-based platform for farmers to manage registrations, slots, payments and agricultural services.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    type: "MERN PROJECT",
  },
  {
    number: "02",
    title: "Crop Recommendation System",
    description:
      "A machine learning application that recommends suitable crops based on agricultural and soil parameters.",
    tech: ["Python", "Machine Learning", "Random Forest"],
    type: "DATA SCIENCE",
  },
  {
    number: "03",
    title: "HNBGU Student Resource Hub",
    description:
      "A student-focused platform designed to provide useful academic resources through a modern web interface.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    type: "WEB APPLICATION",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-container">

        <div className="section-heading">
          <p>SELECTED WORK</p>
          <h2>Featured <span>Projects</span></h2>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>

              <div className="project-number">
                {project.number}
              </div>

              <div className="project-content">
                <p className="project-type">
                  {project.type}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <button className="project-link">
                  View Project ↗
                </button>
              </div>

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
