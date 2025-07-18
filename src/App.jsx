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
import { links } from "./constants/data";

/**
 * App component - main component
 */
function App() {
  const [visibleLink, setVisibleLink] = useState(links[0].id);

  // Dynamic active links logic
  const ref = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleLink(entry.target.getAttribute("id"));
          }
        });
      },
      { threshold: [0.3, 0.7] }
    );
    
    // Clear and re-observe
    ref.current.forEach((r) => {
      if (r) observer.observe(r);
    });
    
    return () => {
      ref.current.forEach((r) => {
        if (r) observer.unobserve(r);
      });
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
        <section ref={refCallback} className="main-section" id="home">
          <div className="home-txt-box">
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
            <a title="projects-link" href="#projects" id="home-btn">
              <OtherIcon className="icon" icon="arrow" />
              View my Work
            </a>
          </div>
          <div className="home-img"></div>
        </section>
        <SectionDivider showDivider={false} />
        <section ref={refCallback} className="main-section" id="about">
          <div className="about-me">
            <div className="about-img-box"></div>
            <div className="about-content">
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
          <div className="rings">
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
          <div className="projects-container">
            <Project title="android mobile app" language="Kotlin" id="0">
              Mobile application that helps you find recipes to cook by
              inputting ingredients, all while following your friends and
              sharing your recipes with them.
            </Project>
            <Project title="liking nodes" language="JavaScript, Python" id="5">
              Web application with an interactive graph-based frontend where
              users can add and like nodes. Handles database interactions, and
              enables real-time local updates across active sessions.
            </Project>
            <Project title="ACME protocol" language="Java" id="6">
              A remake of the ACME certificate protocol, managing the process of
              certificate issuance and revocation. It includes multiple servers
              for handling challenges and certificate requests.
            </Project>
            <Project title="bicycle pathfinder" language="Java" id="1">
              Advanced pathfinder for bicycles all over Switzerland’s area. It
              gives the most efficient route between two or more pinpoints by
              considering the distance, elevation and bird’s eye view.
            </Project>
            <Project title="unix filesystem" language="C" id="2">
              A simplified version of the Unix v6 filesystem of the 1970s.
              Constructed the skeleton of the system through a hierarchy of
              layers: sector, mount, inode and directory.
            </Project>
            <Project title="snake" language="Assembly" id="3">
              Snake minigame coded on a Gecko4Education Board. The FPGA is
              programmed to manage the game logic, input handling and screen
              output (LEDs).
            </Project>
            <Project title="crossy cat" language="C" id="4">
              A simplified remake of the ’Crossy Road’ mobile game programmed on
              a Nintendo DS using the libnds library.
            </Project>
          </div>
        </section>
        <SectionDivider />
        <section ref={refCallback} className="main-section" id="contact">
          <div className="main-section-title">contact</div>
          <h2>Feel free to contact</h2>
          <div className="contact-content">
            <div className="contact-txt-box">
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
