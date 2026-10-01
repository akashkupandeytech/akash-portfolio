const skills = [
  {
    name: "React.js",
    level: "Frontend Development",
    icon: "⚛",
  },
  {
    name: "JavaScript",
    level: "Programming Language",
    icon: "JS",
  },
  {
    name: "Node.js",
    level: "Backend Development",
    icon: "N",
  },
  {
    name: "Express.js",
    level: "Backend Framework",
    icon: "E",
  },
  {
    name: "MongoDB",
    level: "Database",
    icon: "M",
  },
  {
    name: "Python",
    level: "Programming",
    icon: "Py",
  },
  {
    name: "HTML & CSS",
    level: "Frontend Development",
    icon: "</>",
  },
  {
    name: "Git & GitHub",
    level: "Version Control",
    icon: "Git",
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-container">

        {/* Section Heading */}
        <div className="section-heading">
          <p>MY TECHNOLOGIES</p>

          <h2>
            Skills & <span>Tools</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div
              className="skill-card"
              key={skill.name}
            >

              {/* Number */}
              <span className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="skill-icon">
                {skill.icon}
              </div>

              {/* Content */}
              <div className="skill-content">
                <h3>{skill.name}</h3>

                <p>{skill.level}</p>
              </div>

              {/* Arrow */}
              <span className="skill-arrow">
                ↗
              </span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;