const skills = [
  {
    name: "React.js",
    level: "Frontend",
    icon: "⚛",
  },
  {
    name: "JavaScript",
    level: "Language",
    icon: "JS",
  },
  {
    name: "Node.js",
    level: "Backend",
    icon: "N",
  },
  {
    name: "Express.js",
    level: "Backend",
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
    level: "Frontend",
    icon: "</>",
  },
  {
    name: "Git & GitHub",
    level: "Tools",
    icon: "Git",
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-container">

        <div className="section-heading">
          <p>MY TECHNOLOGIES</p>
          <h2>Skills & <span>Tools</span></h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-icon">
                {skill.icon}
              </div>

              <div>
                <h3>{skill.name}</h3>
                <p>{skill.level}</p>
              </div>

              <span className="skill-arrow">↗</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
