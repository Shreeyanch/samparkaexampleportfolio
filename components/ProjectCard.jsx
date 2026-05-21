export default function ProjectCard({ project }) {
  return (
    <li className="project-item active">
      <a href={project.href} aria-label={`View ${project.title} project`}>
        <figure className="project-img">
          <div className="project-item-icon-box" aria-hidden="true">
            <ion-icon name="eye-outline"></ion-icon>
          </div>
          <img src={project.image} alt={project.alt} loading="lazy" />
        </figure>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-category">{project.category}</p>
      </a>
    </li>
  );
}
