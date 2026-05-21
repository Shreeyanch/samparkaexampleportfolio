const education = [
  {
    title: "BSc (Hons) Computing",
    place: "Islington College | London Metropolitan University",
    period: "2023 - Present",
    description: "Studying computing with practical exposure to development workflows, technical systems, and collaborative project work.",
  },
  {
    title: "School Leaving Certificate (SLC)",
    place: "St. Xavier's College | National Examinations Board",
    period: "2021 - 2022",
    description: "Completed higher secondary education in Maitighar, Kathmandu.",
  },
  {
    title: "Secondary Education Examination (SEE)",
    place: "Kavya School | National Examinations Board",
    period: "2010 - 2020",
    description: "Completed secondary education in Buddhanagar, Kathmandu.",
  },
];

const experience = [
  {
    title: "Full Stack Developer Intern",
    place: "Samparka, Kathmandu",
    period: "July 2025 - Current",
    description: "Contributing to blog management, website redesign, frontend and backend tasks, API integration, NFC planning, and UI/UX improvements.",
  },
  {
    title: "Private Tutor",
    place: "Kathmandu, Nepal",
    period: "August 2022 - June 2024",
    description: "Tutored school-level students across multiple subjects with personalized lesson plans, progress tracking, and academic support.",
  },
];

const skills = [
  { name: "HTML, CSS, JavaScript", value: 85 },
  { name: "Git, GitHub, VS Code", value: 80 },
  { name: "Firebase & Database Basics", value: 70 },
  { name: "Documentation & Coordination", value: 90 },
  { name: "Flutter & Firebase", value: 65 },
];

function Timeline({ title, items }) {
  return (
    <section className="timeline" aria-labelledby={`${title.toLowerCase()}-title`}>
      <div className="title-wrapper">
        <div className="icon-box" aria-hidden="true">
          <ion-icon name="book-outline"></ion-icon>
        </div>
        <h3 className="h3" id={`${title.toLowerCase()}-title`}>{title}</h3>
      </div>

      <ol className="timeline-list">
        {items.map((item) => (
          <li className="timeline-item" key={`${item.title}-${item.period}`}>
            <h4 className="h4 timeline-item-title">{item.title}</h4>
            <span>{item.period}</span>
            <p className="timeline-place">{item.place}</p>
            <p className="timeline-text">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function Resume({ active }) {
  return (
    <article className={`resume ${active ? "active" : ""}`} aria-hidden={!active}>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <Timeline title="Education" items={education} />
      <Timeline title="Experience" items={experience} />

      <section className="skill" aria-labelledby="skills-title">
        <h3 className="h3 skills-title" id="skills-title">My skills</h3>

        <ul className="skills-list content-card">
          {skills.map((skill) => (
            <li className="skills-item" key={skill.name}>
              <div className="title-wrapper">
                <h4 className="h5">{skill.name}</h4>
                <data value={skill.value}>{skill.value}%</data>
              </div>

              <div className="skill-progress-bg" aria-hidden="true">
                <div className="skill-progress-fill" style={{ width: `${skill.value}%` }}></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
