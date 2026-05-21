"use client";

import { useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Leadership from "../components/Leadership";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";
import Sidebar from "../components/Sidebar";

const pages = ["About", "Resume", "Portfolio", "Leadership", "Contact"];

export default function Home() {
  const [activePage, setActivePage] = useState("About");

  function handlePageChange(page) {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main>
      <Sidebar />

      <div className="main-content">
        <Navbar pages={pages} activePage={activePage} onPageChange={handlePageChange} />

        <About active={activePage === "About"} />
        <Resume active={activePage === "Resume"} />
        <Portfolio active={activePage === "Portfolio"} />
        <Leadership active={activePage === "Leadership"} />
        <Contact active={activePage === "Contact"} />
      </div>
    </main>
  );
}
