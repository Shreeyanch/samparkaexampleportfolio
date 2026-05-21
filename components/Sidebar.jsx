"use client";

import { useState } from "react";

const contacts = [
  {
    icon: "mail-outline",
    title: "Email",
    body: "swetaathapaa@gmail.com",
    href: "mailto:swetaathapaa@gmail.com",
  },
  {
    icon: "phone-portrait-outline",
    title: "Phone",
    body: "9861724826",
    href: "tel:+9779861724826",
  },
  {
    icon: "calendar-outline",
    title: "Education",
    body: "BSc Computing",
  },
  {
    icon: "location-outline",
    title: "Location",
    body: "Kathmandu, Bagmati",
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`sidebar ${isOpen ? "active" : ""}`} aria-label="Profile sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/assets/images/my-avatar.png" alt="Sweta Thapa" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Sweta Thapa">Sweta Thapa</h1>
          <p className="title">Full Stack Developer Intern</p>
        </div>

        <button
          className="info_more-btn"
          type="button"
          aria-expanded={isOpen}
          aria-controls="sidebar-contacts"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span>{isOpen ? "Hide Contacts" : "Show Contacts"}</span>
          <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more" id="sidebar-contacts">
        <div className="separator"></div>

        <ul className="contacts-list">
          {contacts.map((contact) => (
            <li className="contact-item" key={contact.title}>
              <div className="icon-box" aria-hidden="true">
                <ion-icon name={contact.icon}></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">{contact.title}</p>
                {contact.href ? (
                  <a href={contact.href} className="contact-link">{contact.body}</a>
                ) : (
                  <span>{contact.body}</span>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="separator"></div>

        <ul className="social-list" aria-label="Social profiles">
          <li className="social-item">
            <a href="#" className="social-link" aria-label="LinkedIn profile">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link" aria-label="GitHub profile">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
