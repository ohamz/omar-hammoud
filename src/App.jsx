import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import SectionDivider from "./components/SectionDivider";
import ProgressRing from "./components/ProgressRing";
import Project from "./components/Project";
import ContactForm from "./components/ContactForm";
import SocialLinks from "./components/SocialLinks";
import OtherIcon from "./components/OtherIcon";

import { useState, useRef, useEffect } from "react";
import { links, recentProjects, otherProjects } from "./constants/data";

/**
 * App component - main component
 */
function App() {
  const [visibleLink, setVisibleLink] = useState(links[0].id);

  // Dynamic active links logic
  const ref = useRef([]);
  useEffect(() => {
    const getRevealChildren = (element) =>
      element ? Array.from(element.querySelectorAll(".reveal")) : [];

    const observeSection = (section, observer) => {
      if (!section) return;
      observer.observe(section);
      getRevealChildren(section).forEach((el) => observer.observe(el));
    };

    const unobserveSection = (section, observer) => {
      if (!section) return;
      observer.unobserve(section);
      getRevealChildren(section).forEach((el) => observer.unobserve(el));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetId = entry.target.getAttribute("id");
            if (targetId) {
              setVisibleLink(targetId);
            }
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: [0.3, 0.7] }
    );

    ref.current.forEach((section) => observeSection(section, observer));

    return () => {
      ref.current.forEach((section) => unobserveSection(section, observer));
    };
  }, []);

  const refCallback = (el) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };

  return (
    <>
      <Navigation visibleLink={visibleLink} />
      <main>
        <section ref={refCallback} className="main-section reveal reveal--fade" id="home">
          <div className="home-txt-box reveal reveal--up">
            <div className="home-intro">hey there!</div>
            <h1>
              I'm Omar,
              <span className="green-title"> Software Developer</span>
            </h1>
            <p>
              Computer Science student passionate about this field of study. I
              learned and practiced both high-level and low-level programming
              languages like Python, Java, Scala, C, Assembly, etc... I can
              adapt easily and rapidly to any working team and tools. Check my
              CV for more!
            </p>
            <div className="hero-ctas">
              <a title="projects-link" href="#projects" id="home-btn" className="pressable hover-raise">
                <OtherIcon className="icon" icon="arrow" />
                View my Work
              </a>
              <a
                title="download-cv"
                href="/assets/Omar_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="download-btn pressable"
              >
                Download CV
              </a>
              <a
                title="email-me"
                href="mailto:omar.hammoudx@gmail.com?subject=Hello%20Omar"
                className="download-btn pressable"
              >
                Email me
              </a>
            </div>
          </div>
          <div className="home-img"></div>
        </section>
        <SectionDivider showDivider={false} />
        <section ref={refCallback} className="main-section" id="about">
          <div className="about-me reveal reveal--up">
            <div className="about-img-box"></div>
            <div className="about-content reveal reveal--up">
              <div className="about-content-head">
                <div className="main-section-title">about me</div>
                <h2>About me in less than a minute</h2>
              </div>
              <div className="about-content-txt">
                <p>
                  I'm Omar, a British-Lebanese student in the field of Computer
                  Science.
                </p>
                <p>
                  Studying abroad, I'm currently pursuing my MSc in Computer Science,
                  majoring in Data Management Systems at the Swiss Federal Institute
                  of Technology (ETH Zurich), after completing my BSc in the same
                  field at EPFL in Lausanne.
                </p>
                <p>
                  My journey has been a blend of academic training and making
                  friends. I have a big passion for programming and problem
                  solving, particularly in data management and cloud-related work,
                  such that when I'm given a project or a task, I always push
                  through the challenges to achieve the best possible outcome.
                </p>
              </div>
            </div>
          </div>
          <div className="rings reveal reveal--up">
            <ProgressRing id="0">programming</ProgressRing>
            <ProgressRing id="1">critical thinking</ProgressRing>
            <ProgressRing id="2">problem solving</ProgressRing>
            <ProgressRing id="3">web/app developement</ProgressRing>
          </div>
        </section>
        <SectionDivider />
        <section ref={refCallback} className="main-section" id="projects">
          <div className="main-section-title">my projects</div>
          <h2>My recent projects</h2>
          <div className="projects-container projects-container--recent reveal reveal--up">
            {recentProjects.map((project) => (
              <Project
                key={project.id}
                title={project.title}
                language={project.language}
                id={project.id}
                github={project.github}
              >
                {project.description}
              </Project>
            ))}
          </div>
          <h2 style={{ marginTop: "8vh" }}>Other projects</h2>
          <div className="projects-container projects-container--other reveal reveal--up">
            {otherProjects.map((project) => (
              <Project
                key={project.id}
                title={project.title}
                language={project.language}
                id={project.id}
                small
                hideDescription
                github={project.github}
              >
                {project.description}
              </Project>
            ))}
          </div>
        </section>
        <SectionDivider />
        <section ref={refCallback} className="main-section" id="contact">
          <div className="main-section-title">contact</div>
          <h2>Feel free to contact</h2>
          <div className="contact-content reveal reveal--up">
            <div className="contact-txt-box reveal reveal--up">
              <OtherIcon className="display-icon" icon="arrow" />
              <div className="contact-txt">
                <h5>Let's work together</h5>
                <p>
                  Send me a message if you like my profile and would like to
                  collaborate!
                </p>
              </div>
              <div className="follow-txt">
                <h5>Follow me</h5>
                <SocialLinks />
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
