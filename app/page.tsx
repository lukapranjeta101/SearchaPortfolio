"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoImage from "./logo.png";
import cabinetLogo from "../cabinetvenuelogo.png";
import dynamixLogo from "../dynamix logo.png";
import handymanLogo from "../mikeshandymanlogo.png";
import cabinetVenueImage from "../cabinetvenue.png";
import dynamixImage from "../dynamix.png";
import myWorkImage from "../mywork.png";
import uiImage from "../ui.png";
import seoImage from "../seo.jpg";
import webImage from "../web.jpg";
import brandImage from "../brand.png";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const recentProjectSlides = [
    {
      image: myWorkImage,
      alt: "Recent project showcase",
      date: "18 March, 2026",
    },
    {
      image: cabinetVenueImage,
      alt: "Cabinet Venue project showcase",
      date: "9 April, 2026",
    },
    {
      image: dynamixImage,
      alt: "Dynamix project showcase",
      date: "1 April, 2026",
    },
  ];

  const [recentProjectIndex, setRecentProjectIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRecentProjectIndex((currentIndex) => (currentIndex + 1) % recentProjectSlides.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, [recentProjectSlides.length]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const recentProjectSlide = recentProjectSlides[recentProjectIndex];

  const serviceCards = [
    {
      title: "UI/UX Design",
      featured: true,
      image: uiImage,
      items: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Interactive Interface Design",
        "Usability Testing & Optimization",
      ],
    },
    {
      title: "Web Development",
      image: webImage,
      items: [
        "Responsive Front-End Builds",
        "Custom CMS Integrations",
        "Performance Optimization",
        "API & Feature Implementation",
      ],
    },
    {
      title: "Branding & Identity",
      image: brandImage,
      items: [
        "Visual Direction Systems",
        "Typography & Color Strategy",
        "Social Media Brand Kits",
        "Creative Asset Production",
      ],
    },
    {
      title: "SEO & Growth",
      image: seoImage,
      items: [
        "Technical SEO Audits",
        "On-Page Optimization",
        "Analytics & Conversion Tracking",
        "Content Structure Planning",
      ],
    },
  ];

  const projectCards = [
    {
      title: "Freelance Hire Website Redesign",
      description:
        "Building clean, user-friendly MVPs that validate ideas quickly and deliver real impact.",
      image: uiImage,
      tags: ["Product Designer", "UX/UI Design", "Marketing"],
      featured: true,
    },
    {
      title: "Marketing Agency Website Design",
      description:
        "Collaborated on a Webflow site with reusable components, allowing it to grow with the brand.",
      image: myWorkImage,
      tags: ["API Integration", "Visual Identity", "Marketing"],
    },
    {
      title: "No Code Webflow Development",
      description:
        "Revamping outdated layouts into modern, responsive websites that improve usability and engagement.",
      image: webImage,
      tags: ["Wireframing", "Brand Strategy", "CMS Setup"],
    },
    {
      title: "Branding Logo Design",
      description:
        "Crafting unique brand identities that reflect values, connect with audiences, and stand out.",
      image: brandImage,
      tags: ["UX/UI Design", "Mobile Optimization", "Usability Testing"],
    },
  ];

  const testimonials = [
    {
      quote: "\"The website completely changed how customers see our business.\"",
      content:
        "We needed something that actually reflected the quality of our work, and he delivered exactly that. The site looks clean, modern, and professional, and we’ve already had customers mention it. The whole process was quick and easy — he just got it.",
      author: "Cabinet Venue",
      role: "Cabinet Venue",
      social: "facebook",
    },
    {
      quote: "\"He made the whole process simple and handled everything.\"",
      content:
        "I didn’t know anything about websites going into this, but he walked me through it and took care of everything. The site looks great and actually brings in calls. Super easy to work with and gets things done fast.",
      author: "Mike’s Handyman",
      role: "Owner, Mike’s Handyman",
      social: "instagram",
    },
    {
      quote: "\"Fast execution and a very polished final product.\"",
      content:
        "We needed a professional online presence that matched our brand, and he delivered quickly without sacrificing quality. Communication was clear, the turnaround was impressive, and the final site exceeded expectations. Would absolutely work with him again.",
      author: "Dynamix LLC",
      role: "Dynamix LLC",
      social: "linkedin",
    },
  ];

  const faqItems = [
    {
      question: "What services do you offer?",
      answer:
        "Blending creativity and functionality, I design user-focused digital products and responsive websites that not only look stunning but also deliver.",
      open: true,
    },
    {
      question: "How fast will I receive my work?",
      answer:
        "Turnaround depends on scope, but I always share a clear delivery timeline before starting the project.",
    },
    {
      question: "What's your refund policy?",
      answer:
        "I keep the process transparent and can discuss refund terms before work begins based on the project agreement.",
    },
    {
      question: "What if I have a single project?",
      answer:
        "Single projects are welcome. I can help with one-off landing pages, redesigns, or focused UX improvements.",
    },
    {
      question: "Do you offer complete website design?",
      answer:
        "Yes — I handle concept, layout, design, and responsive implementation for complete website builds.",
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Absolutely. I can provide ongoing updates, improvements, and support after launch if needed.",
    },
  ];

  return (
    <main className="portfolio-landing">
      <section className="hero-shell">
        <div className="mx-auto flex w-full max-w-300 flex-1 flex-col px-6">
          <header className="top-nav flex w-full items-center justify-between">
            <div className="brand">
              <Image src={logoImage} alt="logo" className="brand-logo" priority />
            </div>
            <nav className="nav-links">
              <a href="#">HOME</a>
              <a href="#services">SERVICES</a>
              <Link href="/projects">PROJECTS</Link>
              <a href="#">CONTACT</a>
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
              <a href="#" onClick={() => setIsMobileMenuOpen(false)}>HOME</a>
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>SERVICES</a>
              <Link href="/projects" onClick={() => setIsMobileMenuOpen(false)}>PROJECTS</Link>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</a>
            </nav>
          </div>

          <div className="hero-stage relative flex flex-1 flex-col">
            <h1 className="hero-title">
              <span className="title-fill">WEB DESIGNER</span>
              <span className="title-outline">&amp; DEVELOPER</span>
            </h1>

            <div className="hero-grid">
              <aside className="stats-block">
                <div className="stat-item">
                  <h2>
                    25<span>+</span>
                  </h2>
                  <p>PROJECT DONE</p>
                </div>
                <div className="divider" />
                <div className="stat-item">
                  <h2>
                    3<span>+</span>
                  </h2>
                  <p>YEARS EXPERIENCE</p>
                </div>
              </aside>

              <div className="intro-copy">
                <p>
                  I&apos;M LUKA PRANJETA, A WEB DEVELOPER WITH 3 YEARS OF EXPERIENCE.
                </p>
                <p>
                  I&apos;VE COMPLETED 25+ PROJECTS FOCUSED ON MODERN, HIGH-PERFORMANCE
                  DIGITAL EXPERIENCES.
                </p>
                <button type="button">Get Started &rarr;</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="availability-section">
        <p>
          <span className="line-lock">WELCOME TO MY PORTFOLIO! IM</span>{" "}A
          WEB DESIGNER &amp; FRONT-END DEVELOPER,{" "}
          <span className="text-accent">
            CREATING MODERN, RESPONSIVE WEBSITES
          </span>{" "}
          THAT DELIVER SEAMLESS EXPERIENCES.
        </p>
        <div className="availability-row">
          <span>Available for Work |</span>
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
          <a href="#" aria-label="X">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.9 3H22l-6.8 7.7L23 21h-6.3l-4.9-6.4L6.1 21H3l7.3-8.3L2 3h6.4l4.4 5.8L18.9 3Zm-1.1 16h1.8L7.4 5H5.5l12.3 14Z" />
            </svg>
          </a>
        </div>
      </section>

      <section className="plain-black-section" aria-label="Black section">
        <div className="projects-top-row">
          <div className="projects-label">
            <svg
              className="projects-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2.5c.45 0 .82.34.87.78l.64 5.35a1.8 1.8 0 0 0 1.58 1.58l5.35.64a.88.88 0 0 1 0 1.74l-5.35.64a1.8 1.8 0 0 0-1.58 1.58l-.64 5.35a.88.88 0 0 1-1.74 0l-.64-5.35a1.8 1.8 0 0 0-1.58-1.58l-5.35-.64a.88.88 0 0 1 0-1.74l5.35-.64a1.8 1.8 0 0 0 1.58-1.58l.64-5.35A.88.88 0 0 1 12 2.5Z" />
            </svg>
            <span className="projects-text recent-projects-text">
              Recent Projects
            </span>
          </div>
          <Link href="/projects" className="projects-link">
            <span className="projects-text">Explore Work</span>
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
        <div className="projects-preview">
          <div className="projects-preview-frame">
            <div className="projects-progress-track" aria-hidden="true">
              <span
                key={recentProjectIndex}
                className="projects-progress-fill"
              />
            </div>
            <Image
              src={recentProjectSlide.image}
              alt={recentProjectSlide.alt}
              className="projects-preview-image"
              key={recentProjectSlide.alt}
            />
            <div className="projects-badges" aria-hidden="true">
              <div className="projects-badge">UI/UX Design</div>
              <div className="projects-badge">{recentProjectSlide.date}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services-section" aria-label="Services section">
        <div className="services-top-row">
          <div className="services-label">
            <svg
              className="projects-icon services-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2.5c.45 0 .82.34.87.78l.64 5.35a1.8 1.8 0 0 0 1.58 1.58l5.35.64a.88.88 0 0 1 0 1.74l-5.35.64a1.8 1.8 0 0 0-1.58 1.58l-.64 5.35a.88.88 0 0 1-1.74 0l-.64-5.35a1.8 1.8 0 0 0-1.58-1.58l-5.35-.64a.88.88 0 0 1 0-1.74l5.35-.64a1.8 1.8 0 0 0 1.58-1.58l.64-5.35A.88.88 0 0 1 12 2.5Z" />
            </svg>
            <span className="projects-text recent-projects-text services-title">
              My Services
            </span>
            <span className="services-tagline">My unique creative</span>
          </div>
        </div>
        <p className="services-tagline services-offering">
          Offering made just for you
        </p>
        <a href="#" className="services-link">
          <span className="projects-text">All Services</span>
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
        <div className="services-cards" aria-label="Service cards">
          {serviceCards.map((service) => (
            <article
              key={service.title}
              className={`service-card ${service.featured ? "service-card-featured" : ""}`}
            >
              <div className="service-card-content">
                <h3 className="service-card-title">{service.title}</h3>
                <ul className="service-chip-list" aria-label={`${service.title} details`}>
                  {service.items.map((item) => (
                    <li key={item} className="service-chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="service-card-media">
                <div className="service-image-frame">
                  <Image
                    src={service.image}
                    alt={`${service.title} showcase`}
                    className="service-card-image"
                  />
                </div>
                <button
                  type="button"
                  className="service-arrow"
                  aria-label={`View ${service.title}`}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 16L16 8" />
                    <path d="M10 8h6v6" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-journey-section" aria-label="My projects section">
        <div className="projects-journey-top-row">
          <div className="projects-journey-heading">
            <div className="projects-journey-label">
              <svg
                className="projects-icon projects-journey-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2.5c.45 0 .82.34.87.78l.64 5.35a1.8 1.8 0 0 0 1.58 1.58l5.35.64a.88.88 0 0 1 0 1.74l-5.35.64a1.8 1.8 0 0 0-1.58 1.58l-.64 5.35a.88.88 0 0 1-1.74 0l-.64-5.35a1.8 1.8 0 0 0-1.58-1.58l-5.35-.64a.88.88 0 0 1 0-1.74l5.35-.64a1.8 1.8 0 0 0 1.58-1.58l.64-5.35A.88.88 0 0 1 12 2.5Z" />
              </svg>
              <span className="projects-text recent-projects-text projects-journey-title">
                My Projects
              </span>
              <span className="projects-journey-inline">Transforming ideas</span>
            </div>
            <p className="projects-journey-description">
              into memorable brand journeys.
            </p>
          </div>
          <div className="projects-journey-aside">
            <p className="projects-journey-sidecopy">
              We turn ideas into memorable brand journeys with intuitive and
              engaging digital experiences.
            </p>
            <Link href="/projects" className="projects-journey-link">
              <span className="projects-text">All Projects</span>
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
        <div className="projects-showcase-grid" aria-label="Projects showcase cards">
          {projectCards.map((project) => (
            <article
              key={project.title}
              className={`project-showcase-card ${project.featured ? "project-showcase-card-featured" : ""}`}
            >
              <div className="project-showcase-media">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="project-showcase-image"
                />
                <Link
                  href="/projects"
                  className="project-showcase-arrow"
                  aria-label={`Open ${project.title}`}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 16L16 8" />
                    <path d="M10 8h6v6" />
                  </svg>
                </Link>
              </div>
              <ul className="project-showcase-tags" aria-label={`${project.title} tags`}>
                {project.tags.map((tag) => (
                  <li key={tag} className="project-showcase-tag">
                    {tag}
                  </li>
                ))}
              </ul>
              <h3 className="project-showcase-title">{project.title}</h3>
              <p className="project-showcase-description">{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonials-section" aria-label="Testimonials section">
        <div className="testimonials-header">
          <div className="testimonials-label">
            <svg
              className="projects-icon testimonials-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2.5c.45 0 .82.34.87.78l.64 5.35a1.8 1.8 0 0 0 1.58 1.58l5.35.64a.88.88 0 0 1 0 1.74l-5.35.64a1.8 1.8 0 0 0-1.58 1.58l-.64 5.35a.88.88 0 0 1-1.74 0l-.64-5.35a1.8 1.8 0 0 0-1.58-1.58l-5.35-.64a.88.88 0 0 1 0-1.74l5.35-.64a1.8 1.8 0 0 0 1.58-1.58l.64-5.35A.88.88 0 0 1 12 2.5Z" />
            </svg>
            <span className="projects-text recent-projects-text testimonials-title">
              Testimonials
            </span>
          </div>

          <h2 className="testimonials-heading">Voices of my clients</h2>

          <div className="testimonials-nav">
            <button
              type="button"
              className="testimonials-nav-btn testimonials-nav-prev"
              aria-label="Previous testimonial"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </button>
            <button
              type="button"
              className="testimonials-nav-btn testimonials-nav-next"
              aria-label="Next testimonial"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </button>
          </div>
        </div>

        <div className="testimonials-carousel" aria-label="Client testimonials">
          {testimonials.map((testimonial) => (
            <article key={testimonial.author} className="testimonial-card">
              <blockquote className="testimonial-quote">
                {testimonial.quote}
              </blockquote>
              <p className="testimonial-content">{testimonial.content}</p>
              <div className="testimonial-footer">
                <div className="testimonial-author">
                  <div className="testimonial-avatar-frame" aria-hidden="true">
                    {testimonial.author === "Cabinet Venue" && (
                      <Image src={cabinetLogo} alt="Cabinet Venue logo" className="testimonial-avatar-image" />
                    )}
                    {testimonial.author === "Mike’s Handyman" && (
                      <Image src={handymanLogo} alt="Mike’s Handyman logo" className="testimonial-avatar-image" />
                    )}
                    {testimonial.author === "Dynamix LLC" && (
                      <Image src={dynamixLogo} alt="Dynamix LLC logo" className="testimonial-avatar-image" />
                    )}
                  </div>
                  <div>
                    <p className="testimonial-author-name">{testimonial.author}</p>
                    <p className="testimonial-author-role">{testimonial.role}</p>
                  </div>
                </div>
                {testimonial.social === "facebook" && (
                  <div className="testimonial-social testimonial-social-facebook" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor" />
                    </svg>
                  </div>
                )}
                {testimonial.social === "instagram" && (
                  <div className="testimonial-social testimonial-social-instagram" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 1.8A4 4 0 0 0 3.8 7.8v8.4a4 4 0 0 0 4 4h8.4a4 4 0 0 0 4-4V7.8a4 4 0 0 0-4-4H7.8Zm9.3 1.4a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z" fill="currentColor" />
                    </svg>
                  </div>
                )}
                {testimonial.social === "linkedin" && (
                  <div className="testimonial-social testimonial-social-linkedin" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.96v5.66H9.3V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.3 2.38 4.3 5.48v6.26ZM5.28 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.06 20.45H3.5V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" fill="currentColor" />
                    </svg>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="faqs-section" aria-label="Frequently asked questions section">
        <div className="faqs-heading-wrap">
          <div className="faqs-label">
            <svg className="projects-icon faqs-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.5c.45 0 .82.34.87.78l.64 5.35a1.8 1.8 0 0 0 1.58 1.58l5.35.64a.88.88 0 0 1 0 1.74l-5.35.64a1.8 1.8 0 0 0-1.58 1.58l-.64 5.35a.88.88 0 0 1-1.74 0l-.64-5.35a1.8 1.8 0 0 0-1.58-1.58l-5.35-.64a.88.88 0 0 1 0-1.74l5.35-.64a1.8 1.8 0 0 0 1.58-1.58l.64-5.35A.88.88 0 0 1 12 2.5Z" />
            </svg>
            <span className="projects-text recent-projects-text faqs-title">FAQS</span>
          </div>
          <h2 className="faqs-heading">Frequently asked questions</h2>
        </div>

        <div className="faqs-layout">
          <div className="faqs-list" aria-label="Frequently asked questions list">
            {faqItems.map((item) => (
              <details key={item.question} className="faq-item" open={item.open}>
                <summary className="faq-question">
                  <span>{item.question}</span>
                  <span className="faq-toggle" aria-hidden="true">
                    {item.open ? (
                      <svg viewBox="0 0 24 24">
                        <path d="M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24">
                        <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    )}
                  </span>
                </summary>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <aside className="faq-card" aria-label="More questions contact card">
            <div className="faq-avatars" aria-hidden="true">
              <span className="faq-avatar faq-avatar-one">LP</span>
              <span className="faq-avatar faq-avatar-two">LP</span>
              <span className="faq-avatar faq-avatar-three">LP</span>
            </div>
            <h3 className="faq-card-title">
              Do You have More
              <br />
              Questions?
            </h3>
            <p className="faq-card-copy">
              Can&apos;t find the answer you&apos;re looking for? Please chat to our
              friendly team. We specialize.
            </p>
            <a href="#" className="faq-card-button">
              Get in Touch
              <span aria-hidden="true">→</span>
            </a>
          </aside>
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
              <a href="#" className="site-footer-button">
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
            <div className="site-footer-brand" aria-label="Brand">
              <Image
                src={logoImage}
                alt="logo"
                className="site-footer-brand-logo"
              />
            </div>

            <nav className="site-footer-nav" aria-label="Footer navigation">
              <a href="#">HOME</a>
              <a href="#services">SERVICES</a>
              <Link href="/projects">PROJECTS</Link>
              <a href="#">CONTACT</a>
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
