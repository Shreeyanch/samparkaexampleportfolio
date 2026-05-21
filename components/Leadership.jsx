const leadershipCards = [
  {
    image: "/assets/images/blog-1.jpg",
    category: "Training",
    title: "SkillRank Internship Training",
    date: "Dec 2024 - Jan 2025",
    text: "Completed structured training focused on web development, UI/UX design, collaborative workflows, and industry-relevant tools.",
  },
  {
    image: "/assets/images/blog-2.jpg",
    category: "Collaboration",
    title: "Remote Team Coordination",
    date: "Current",
    text: "Comfortable working through Slack, Zoom, Google Meet, Trello, Notion, and Canva to manage tasks and communicate progress.",
  },
  {
    image: "/assets/images/blog-3.jpg",
    category: "Certificate",
    title: "AWS Academy Cloud Foundations",
    date: "AWS Academy",
    text: "Built foundational understanding of cloud concepts, services, and technical terminology used in modern software teams.",
  },
  {
    image: "/assets/images/blog-4.jpg",
    category: "Certificate",
    title: "AWS Data Engineering",
    date: "AWS Academy",
    text: "Studied core data engineering ideas that support structured thinking around databases, pipelines, and information systems.",
  },
  {
    image: "/assets/images/blog-5.jpg",
    category: "Certificate",
    title: "Machine Learning Foundations",
    date: "AWS Academy",
    text: "Explored machine learning foundations and natural language processing concepts through AWS Academy coursework.",
  },
  {
    image: "/assets/images/blog-6.jpg",
    category: "Strength",
    title: "Public Speaking & Ownership",
    date: "Ongoing",
    text: "Known for being proactive, feedback-driven, adaptable, detail-oriented, and confident in communication and presentation.",
  },
];

export default function Leadership({ active }) {
  return (
    <article className={`leadership ${active ? "active" : ""}`} aria-hidden={!active}>
      <header>
        <h2 className="h2 article-title">Leadership</h2>
      </header>

      <section className="leadership-posts" aria-labelledby="leadership-title">
        <h3 className="sr-only" id="leadership-title">Leadership and professional development</h3>

        <ul className="leadership-posts-list">
          {leadershipCards.map((card) => (
            <li className="leadership-post-item" key={card.title}>
              <div className="leadership-card">
                <figure className="leadership-banner-box">
                  <img src={card.image} alt="" loading="lazy" />
                </figure>

                <div className="leadership-content">
                  <div className="leadership-meta">
                    <p className="leadership-category">{card.category}</p>
                    <span className="dot" aria-hidden="true"></span>
                    <time>{card.date}</time>
                  </div>

                  <h3 className="h3 leadership-item-title">{card.title}</h3>
                  <p className="leadership-text">{card.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
