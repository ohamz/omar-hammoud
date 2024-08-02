import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import SectionDivider from "./components/SectionDivider";
import ProgressRing from "./components/ProgressRing";
import Project from "./components/Project";
import ContactForm from "./components/ContactForm";
import SocialLinks from "./components/SocialLinks";
import OtherIcon from "./components/OtherIcon";

/**
 * App component - main component
 */
function App() {
  return (
    <>
      <Navigation />
      <main>
        <section className="main-section" id="home">
          <div className="home-txt-box">
            <div className="home-intro">hey there!</div>
            <h1>
              I'm Omar,
              <span className="green-title"> Computer Science student</span>
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
        <section className="main-section" id="about">
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
                  Studying abroad, I got my BSc in Computer Science at the Swiss
                  Federal Institute of Technology Lausanne (EPFL). These 3 years
                  helped me develop countless skills both work and management
                  related.
                </p>
                <p>
                  My journey has been a blend of academic training and making
                  friends. I have a big passion for programming and problem
                  solving such that when I'm given a project or a task, I always
                  push through the challenges to achieve the best possible
                  outcome.
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
        <section className="main-section" id="projects">
          <div className="main-section-title">my projects</div>
          <h2>My recent projects</h2>
          <div className="projects-container">
            <Project title="android mobile app" language="Kotlin" id="0">
              Mobile application that helps you find recipes to cook by
              inputting ingredients, all while following your friends and
              sharing your recipes with them.
            </Project>
            <Project title="bicycle pahfinder" language="Java" id="1">
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
        <section className="main-section" id="contact">
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
