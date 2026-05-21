"use client";

import { useState } from "react";

const initialForm = {
  fullname: "",
  email: "",
  message: "",
};

export default function Contact({ active }) {
  const [formData, setFormData] = useState(initialForm);

  const isValid =
    formData.fullname.trim().length > 0 &&
    formData.email.trim().length > 0 &&
    formData.message.trim().length > 0;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <article className={`contact ${active ? "active" : ""}`} aria-hidden={!active}>
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" aria-label="Map showing Kathmandu, Nepal">
        <figure>
          <iframe
            title="Kathmandu location map"
            src="https://www.google.com/maps?q=Kathmandu,Nepal&output=embed"
            width="400"
            height="300"
            loading="lazy"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form" aria-labelledby="contact-form-title">
        <h3 className="h3 form-title" id="contact-form-title">Contact Form</h3>

        <form action="#" className="form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              autoComplete="name"
              required
              value={formData.fullname}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button className="form-btn" type="submit" disabled={!isValid}>
            <ion-icon name="paper-plane" aria-hidden="true"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
}
