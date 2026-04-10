"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoImage from "../logo.png";
import cabinetVenueImage from "../../cabinetvenue.png";
import dynamixImage from "../../dynamix.png";
import mikeCompImage from "../../mikecomp.png";
import myWorkImage from "../../mywork.png";

const websiteProjects = [
  {
    title: "Cabinet Venue",
    description:
      "A polished showroom website built to elevate trust, present custom cabinetry work clearly, and guide visitors straight into high-intent inquiries.",
    image: cabinetVenueImage,
    tags: ["Web Design", "Lead Capture", "Brand Presence"],
    href: "https://www.cabinetvenue.com/",
    linkLabel: "https://www.cabinetvenue.com/",
  },
  {
    title: "Dynamix LLC",
    description:
      "A sharper business website focused on clean structure, stronger service communication, and a more credible digital presence across desktop and mobile.",
    image: dynamixImage,
    tags: ["Development", "Responsive UI", "Service Pages"],
    href: "https://dynamix-llc.vercel.app/",
    linkLabel: "https://dynamix-llc.vercel.app/",
  },
  {
    title: "Mike's Handyman",
    description:
      "A conversion-first local service site designed to make contact simple, highlight key offerings fast, and remove friction for homeowners ready to book.",
    image: mikeCompImage,
    tags: ["Local Business", "Mobile UX", "Conversion Flow"],
    href: "https://mikeshandymanhvac.com/",
    linkLabel: "https://mikeshandymanhvac.com/",
  },
  {
    title: "Marketing Agency Website",
    description:
      "A modern agency-style build with reusable content blocks, clearer hierarchy, and a more editorial visual rhythm that makes the brand feel established.",
    image: myWorkImage,
    tags: ["Creative Direction", "Visual System", "Growth Website"],
    href: "https://modern-weld.vercel.app/",
    linkLabel: "https://modern-weld.vercel.app/",
  },
];

export default function ProjectsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <main className="portfolio-landing projects-archive-page">
      <section className="hero-shell projects-archive-hero">
        <div className="mx-auto flex w-full max-w-300 flex-1 flex-col px-6">
          <header className="top-nav flex w-full items-center justify-between">
            <Link href="/" className="brand" aria-label="Home">
              <Image src={logoImage} alt="logo" className="brand-logo" priority />
            </Link>
            <nav className="nav-links">
              <Link href="/" className="nav-link-passive">HOME</Link>
              <Link href="/#services">SERVICES</Link>
              <Link href="/projects" className="is-active">PROJECTS</Link>
              <a href="mailto:lukapranjeta@gmail.com">CONTACT</a>
            </nav>
            <button
              type="button"
              className="mobile-menu-btn"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </header>

          <div className={`mobile-menu-overlay ${isMobileMenuOpen ? "is-open" : ""}`}>
            <button
              type="button"
              className="mobile-menu-close"
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ×
            </button>
            <nav className="mobile-menu-links" aria-label="Mobile navigation">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>HOME</Link>
              <Link href="/#services" onClick={() => setIsMobileMenuOpen(false)}>SERVICES</Link>
              <Link href="/projects" className="is-active" onClick={() => setIsMobileMenuOpen(false)}>
                PROJECTS
              </Link>
              <a href="mailto:lukapranjeta@gmail.com" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</a>
            </nav>
          </div>

          <div className="projects-archive-intro">
            <div className="projects-archive-copy-block">
              <div className="projects-archive-kicker">
                <svg className="projects-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.5c.45 0 .82.34.87.78l.64 5.35a1.8 1.8 0 0 0 1.58 1.58l5.35.64a.88.88 0 0 1 0 1.74l-5.35.64a1.8 1.8 0 0 0-1.58 1.58l-.64 5.35a.88.88 0 0 1-1.74 0l-.64-5.35a1.8 1.8 0 0 0-1.58-1.58l-5.35-.64a.88.88 0 0 1 0-1.74l5.35-.64a1.8 1.8 0 0 0 1.58-1.58l.64-5.35A.88.88 0 0 1 12 2.5Z" />
                </svg>
                <span className="projects-text recent-projects-text">My Projects</span>
              </div>
              <h1 className="projects-archive-title">
                Websites built to feel
                <span className="projects-archive-title-accent">clear, modern, and useful.</span>
              </h1>
            </div>

            <div className="projects-archive-summary">
              <p>
                A focused archive of website work with concise descriptions and
                direct link slots, designed to showcase each build without
                breaking the visual rhythm of the portfolio.
              </p>
              <Link href="/" className="projects-journey-link projects-archive-home-link">
                <span className="projects-text">Back Home</span>
                <svg
                  className="explore-corner-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M8 16L16 8" />
                  <path d="M10 8h6v6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-archive-list-section" aria-label="Website project archive">
        <div className="projects-archive-list-header">
          <div className="projects-archive-list-label">
            <svg className="projects-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.5c.45 0 .82.34.87.78l.64 5.35a1.8 1.8 0 0 0 1.58 1.58l5.35.64a.88.88 0 0 1 0 1.74l-5.35.64a1.8 1.8 0 0 0-1.58 1.58l-.64 5.35a.88.88 0 0 1-1.74 0l-.64-5.35a1.8 1.8 0 0 0-1.58-1.58l-5.35-.64a.88.88 0 0 1 0-1.74l5.35-.64a1.8 1.8 0 0 0 1.58-1.58l.64-5.35A.88.88 0 0 1 12 2.5Z" />
            </svg>
            <span className="projects-text recent-projects-text">Selected Website Work</span>
          </div>
          <p className="projects-archive-list-copy">
            Clean layouts, stronger visual systems, and sites built to make the
            next click obvious.
          </p>
        </div>

        <div className="projects-archive-grid">
          {websiteProjects.map((project, index) => (
            <article
              key={project.title}
              className={`project-archive-card ${index % 2 === 1 ? "project-archive-card-reverse" : ""}`}
            >
              <div className="project-archive-media">
                <Image
                  src={project.image}
                  alt={`${project.title} website preview`}
                  className="project-archive-image"
                />
              </div>

              <div className="project-archive-content">
                <div className="project-archive-topline">
                  <span className="project-archive-index">0{index + 1}</span>
                  <ul className="project-archive-tags" aria-label={`${project.title} tags`}>
                    {project.tags.map((tag) => (
                      <li key={tag} className="project-archive-tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                <h2 className="project-archive-card-title">{project.title}</h2>
                <p className="project-archive-card-copy">{project.description}</p>

                <div className="project-archive-link-row">
                  <a
                    href={project.href}
                    className="project-archive-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>View Website</span>
                    <svg
                      className="explore-corner-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M8 16L16 8" />
                      <path d="M10 8h6v6" />
                    </svg>
                  </a>
                  <span className="project-archive-url">{project.linkLabel}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer" aria-label="Site footer">
        <div className="site-footer-inner">
          <div className="site-footer-cta">
            <p className="site-footer-kicker">
              <svg
                className="projects-icon site-footer-kicker-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2.5c.45 0 .82.34.87.78l.64 5.35a1.8 1.8 0 0 0 1.58 1.58l5.35.64a.88.88 0 0 1 0 1.74l-5.35.64a1.8 1.8 0 0 0-1.58 1.58l-.64 5.35a.88.88 0 0 1-1.74 0l-.64-5.35a1.8 1.8 0 0 0-1.58-1.58l-5.35-.64a.88.88 0 0 1 0-1.74l5.35-.64a1.8 1.8 0 0 0 1.58-1.58l.64-5.35A.88.88 0 0 1 12 2.5Z" />
              </svg>
              <span>Got a project?</span>
            </p>
            <div className="site-footer-cta-row">
              <h2 className="site-footer-title">✌ Let&apos;s work together!</h2>
              <a href="mailto:lukapranjeta@gmail.com" className="site-footer-button">
                Hire Me Now
                <span aria-hidden="true">→</span>
              </a>
            </div>
            <a href="mailto:lukapranjeta@gmail.com" className="site-footer-email">
              lukapranjeta@gmail.com
            </a>
            <a href="tel:+14403761943" className="site-footer-phone">
              440-376-1943
            </a>
          </div>

          <div className="site-footer-bar">
            <Link href="/" className="site-footer-brand" aria-label="Brand">
              <Image
                src={logoImage}
                alt="logo"
                className="site-footer-brand-logo"
              />
            </Link>

            <nav className="site-footer-nav" aria-label="Footer navigation">
              <Link href="/">HOME</Link>
              <Link href="/#services">SERVICES</Link>
              <Link href="/projects">PROJECTS</Link>
              <a href="mailto:lukapranjeta@gmail.com">CONTACT</a>
            </nav>

            <div className="site-footer-socials" aria-label="Social links">
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/pranjetaaa/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 1.8A4 4 0 0 0 3.8 7.8v8.4a4 4 0 0 0 4 4h8.4a4 4 0 0 0 4-4V7.8a4 4 0 0 0-4-4H7.8Zm9.3 1.4a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.96v5.66H9.3V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.3 2.38 4.3 5.48v6.26ZM5.28 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.06 20.45H3.5V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="site-footer-bottom">
            <div className="site-footer-links">
              <a href="#">Terms &amp; Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
