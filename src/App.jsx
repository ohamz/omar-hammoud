import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import UserInput from "./components/UserInput";
import SectionDivider from "./components/SectionDivider";
import ProgressRing from "./components/ProgressRing";
import Project from "./components/Project";
import SocialIcon from "./components/SocialIcon";
import OtherIcon from "./components/OtherIcon";

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
        <SectionDivider />
        <section class="main-section" id="about">
          <div class="about-me">
            <div class="about-img-box"></div>
            <div class="about-content">
              <div class="about-content-head">
                <div class="main-section-title">about me</div>
                <h2>About me in less than a minute</h2>
              </div>
              <div class="about-content-txt">
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
          <div class="rings">
            <ProgressRing id="0">programming</ProgressRing>
            <ProgressRing id="1">critical thinking</ProgressRing>
            <ProgressRing id="2">problem solving</ProgressRing>
            <ProgressRing id="3">web/app developement</ProgressRing>
          </div>
        </section>
        {/* <SectionDivider/>
      <section class="main-section" id="services">
        <div class="main-section-title">my services</div>
        </section> */}
        <SectionDivider />
        <section class="main-section" id="projects">
          <div class="main-section-title">my projects</div>
          <h2>My recent projects</h2>
          <div class="projects-container">
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
        <section class="main-section" id="contact">
          <div class="main-section-title">contact</div>
          <h2>Feel free to contact</h2>
          <div class="contact-content">
            <div class="contact-txt-box">
              <OtherIcon className="display-icon" icon="arrow" />
              <div class="contact-txt">
                <h5>Let's work together</h5>
                <p>
                  Send me a message if you like my profile and would like to
                  collaborate!
                </p>
              </div>
              <div class="follow-txt">
                <h5>Follow me</h5>
                <div class="socials-icons">
                  <SocialIcon
                    name="instagram"
                    link="https://www.instagram.com/omarhammouddd/"
                    icon="/assets/socials-icons/instagram.webp"
                  />
                  <SocialIcon
                    name="linkedin"
                    link="https://www.linkedin.com/in/omar-hammoud-804675206/"
                    icon="/assets/socials-icons/linkedin.webp"
                  />
                  <SocialIcon
                    name="github"
                    link="https://github.com/ohamz"
                    icon="/assets/socials-icons/github-mark.webp"
                  />
                </div>
              </div>
            </div>
            <form method="post" class="contact-form" autocomplete="off">
              <div class="contact-form-content">
                <h3>Get in touch</h3>
                <UserInput icon="profile">Enter your full name</UserInput>
                <UserInput type="email" icon="mail">
                  Enter your Email address
                </UserInput>
                <UserInput icon="edit">Write Message...</UserInput>
                <button class="btn" id="contact-btn">
                  send email
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
