import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: "/assets/images/icon-dev.svg",
    iconAlt: "Development icon",
    title: "Frontend Development",
    text: "Building responsive user interfaces with HTML, CSS, JavaScript, and modern React-based workflows.",
  },
  {
    icon: "/assets/images/icon-design.svg",
    iconAlt: "Design icon",
    title: "UI/UX Support",
    text: "Contributing to website redesigns, usability improvements, and clean content presentation.",
  },
  {
    icon: "/assets/images/icon-app.svg",
    iconAlt: "Application icon",
    title: "Technical Systems",
    text: "Supporting backend tasks, API integration, Firebase basics, database work, and Flutter projects.",
  },
  {
    icon: "/assets/images/icon-photo.svg",
    iconAlt: "Documentation icon",
    title: "Documentation",
    text: "Preparing reports, managing records, organizing content, and coordinating tasks clearly.",
  },
];

export default function About({ active }) {
  return (
    <article className={`about ${active ? "active" : ""}`} aria-hidden={!active}>
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text" aria-label="Career objective">
        <p>
          I am a motivated and detail-oriented computing student with experience in
          administrative support, content management, customer coordination, and
          technical systems.
        </p>

        <p>
          I am currently working as a Full Stack Developer Intern at Samparka in
          Kathmandu, contributing to blog management, website redesign, frontend and
          backend tasks, API integration, NFC planning, and UI/UX improvements.
        </p>
      </section>

      <section className="service" aria-labelledby="service-title">
        <h3 className="h3 service-title" id="service-title">What I do</h3>

        <ul className="service-list">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              iconAlt={service.iconAlt}
              title={service.title}
            >
              {service.text}
            </ServiceCard>
          ))}
        </ul>
      </section>
    </article>
  );
}
