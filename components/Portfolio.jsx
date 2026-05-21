"use client";

import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";

const categories = ["All", "Web design", "Applications", "Web development"];

const projects = [
  {
    title: "Samparka Website Redesign",
    category: "Web development",
    image: "/assets/images/project-1.jpg",
    alt: "Website redesign preview",
    href: "#",
  },
  {
    title: "Blog Management Workflow",
    category: "Web development",
    image: "/assets/images/project-2.png",
    alt: "Blog management preview",
    href: "#",
  },
  {
    title: "UI/UX Improvement Study",
    category: "Web design",
    image: "/assets/images/project-3.jpg",
    alt: "UI UX study preview",
    href: "#",
  },
  {
    title: "Flutter Firebase App",
    category: "Applications",
    image: "/assets/images/project-4.png",
    alt: "Mobile application preview",
    href: "#",
  },
  {
    title: "NFC Planning Support",
    category: "Applications",
    image: "/assets/images/project-5.png",
    alt: "NFC planning preview",
    href: "#",
  },
  {
    title: "Personal Portfolio",
    category: "Web design",
    image: "/assets/images/project-6.png",
    alt: "Portfolio design preview",
    href: "#",
  },
  {
    title: "API Integration Practice",
    category: "Web development",
    image: "/assets/images/project-7.png",
    alt: "API integration preview",
    href: "#",
  },
  {
    title: "Tutor Progress Tracker",
    category: "Applications",
    image: "/assets/images/project-8.jpg",
    alt: "Task tracker preview",
    href: "#",
  },
  {
    title: "Database Basics Lab",
    category: "Web development",
    image: "/assets/images/project-9.png",
    alt: "Database lab preview",
    href: "#",
  },
];

export default function Portfolio({ active }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectOpen, setSelectOpen] = useState(false);

  const visibleProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  function chooseCategory(category) {
    setSelectedCategory(category);
    setSelectOpen(false);
  }

  return (
    <article className={`portfolio ${active ? "active" : ""}`} aria-hidden={!active}>
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects" aria-labelledby="projects-title">
        <h3 className="sr-only" id="projects-title">Projects</h3>

        <ul className="filter-list" aria-label="Project categories">
          {categories.map((category) => (
            <li className="filter-item" key={category}>
              <button
                className={selectedCategory === category ? "active" : ""}
                type="button"
                onClick={() => chooseCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button
            className={`filter-select ${selectOpen ? "active" : ""}`}
            type="button"
            aria-expanded={selectOpen}
            aria-controls="project-filter-options"
            onClick={() => setSelectOpen((current) => !current)}
          >
            <span className="select-value">{selectedCategory}</span>
            <span className="select-icon" aria-hidden="true">
              <ion-icon name="chevron-down"></ion-icon>
            </span>
          </button>

          <ul className="select-list" id="project-filter-options">
            {categories.map((category) => (
              <li className="select-item" key={category}>
                <button type="button" onClick={() => chooseCategory(category)}>
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {visibleProjects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </ul>
      </section>
    </article>
  );
}
