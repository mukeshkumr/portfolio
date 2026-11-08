import { PortraitParticles } from "@/components/portrait-particles";
import { ExperienceMotion } from "@/components/experience-motion";
import { ProjectCard } from "@/components/project-card";
import { SiteHeader } from "@/components/site-header";
import { capabilities, projects, toolbox } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <ExperienceMotion />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="scroll-progress" aria-hidden="true" />
      <SiteHeader />
      <main id="main-content">
        <section className="hero-section" id="top">
          <div className="hero-topline eyebrow">
            <span><i /> AGENTIC AI ENGINEER · BUILDER</span>
            <span>BASED IN DELHI · BUILDING WITH AI</span>
          </div>
          <PortraitParticles />
          <div className="hero-side-note eyebrow">
            <span className="hero-side-number">01 / FOCUS</span>
            <span className="hero-side-plus" aria-hidden="true">+</span>
            <span>AGENTIC SYSTEMS</span>
            <span>RETRIEVAL</span>
            <span>MACHINE LEARNING</span>
            <span>EDUCATION</span>
          </div>
          <div className="hero-copy">
            <p className="hero-kicker eyebrow">BUILDING AI THAT’S USEFUL IN THE REAL WORLD</p>
            <h1 className="hero-name" aria-label="Mukesh Kumar">
              <span className="hero-word-mask" aria-hidden="true">
                <span className="hero-word">Mukesh</span>
              </span>{" "}
              <span className="hero-word-mask" aria-hidden="true">
                <em className="hero-word">Kumar</em>
              </span>
            </h1>
            <p className="hero-description">
              I build AI systems that reason, use tools and can be traced when
              they fail. I also make short videos that help people solve
              problems quicker and easier.
            </p>
            <div className="hero-actions">
              <a className="button button-lime" href="#work">
                Explore My Work <span aria-hidden="true">↓</span>
              </a>
              <a
                className="hero-text-link"
                href="https://www.linkedin.com/in/mukeshkumr/"
                target="_blank"
                rel="noreferrer"
              >
                Start a Conversation <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <a className="scroll-cue eyebrow" href="#about">
            <span /> Scroll to discover
          </a>
          <span className="hero-index eyebrow">DELHI, INDIA · JAMIA HAMDARD UNIVERSITY</span>
        </section>

        <section className="about-section section-paper" id="about">
          <div className="section-shell">
            <div className="section-kicker eyebrow">
              <span>01 / ABOUT ME</span>
              <span>AI · BACKEND · EDUCATION</span>
            </div>
            <div className="about-grid">
              <h2 className="section-title">
                Machine learning
                <br />
                meets backend
                <br />
                <em>engineering.</em>
              </h2>
              <div className="about-copy">
                <p className="copy-lead">
                  I connect machine learning with the backend engineering that
                  makes it useful.
                </p>
                <p>
                  I’m an AI and ML engineer in Delhi, studying B.Tech in
                  Computer Science at Jamia Hamdard University (CGPA 9.2/10,
                  graduating 2028).
                </p>
                <p>
                  My work sits where machine learning meets backend
                  engineering: RAG systems, LangGraph agents, NLP models and
                  the FastAPI services that put them in front of real users.
                </p>
                <p>
                  I’m here to meet good people: builders, founders, hiring managers and anyone who
                  has a problem worth solving with AI.
                </p>
                <a
                  className="underlined-link"
                  href="https://github.com/mukeshkumr"
                  target="_blank"
                  rel="noreferrer"
                >
                  See what I’m building <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <div className="principles eyebrow">
              <span>RAG SYSTEMS.</span>
              <span>LANGGRAPH AGENTS.</span>
              <span>NLP MODELS.</span>
            </div>
          </div>
        </section>

        <section className="work-section section-shell" id="work">
          <div className="section-kicker eyebrow">
            <span>02 / SELECTED WORK</span>
            <span>PROJECTS · MODELS · SYSTEMS</span>
          </div>
          <div className="section-heading-row">
            <h2 className="section-title">
              A few things
              <br />
              <em>I’ve built.</em>
            </h2>
            <p>
              From calibrated risk scores to document-grounded conversations,
              these are a few things I’ve built with AI.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>
          <a
            className="all-work-link"
            href="https://github.com/mukeshkumr"
            target="_blank"
            rel="noreferrer"
          >
            <span>See everything on GitHub</span>
            <span className="round-arrow" aria-hidden="true">↗</span>
          </a>
        </section>

        <section
          className="capabilities-section section-paper"
          id="capabilities"
        >
          <div className="section-shell">
            <div className="section-kicker eyebrow">
              <span>03 / WHAT I CAN PUT ON THE TABLE</span>
              <span>TOOLS · METHODS · EXPLANATIONS</span>
            </div>
            <div className="section-heading-row">
              <h2 className="section-title">
                What I build.
                <br />
                <em>How I help.</em>
              </h2>
              <p>
                Agentic systems, grounded retrieval, observability and clear
                explanations.
              </p>
            </div>
            <div className="capability-list">
              {capabilities.map((item) => (
                <article
                  className="capability-row"
                  key={item.number}
                >
                  <span className="capability-number eyebrow">
                    {item.number}
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <span className="capability-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
            <div className="toolbox">
              <span className="eyebrow">THE TOOLBOX</span>
              <div className="tool-tags">
                {toolbox.map((tool) => <span key={tool}>{tool}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="community-section section-shell" id="content">
          <div className="section-kicker eyebrow">
            <span>04 / CONTENT &amp; COMMUNITY</span>
            <span>SHORT VIDEOS · PRACTICAL IDEAS</span>
          </div>
          <div className="community-grid">
            <h2 className="section-title">
              Complex ideas.
              <br />
              <em>Clear explanations.</em>
            </h2>
            <div className="community-copy">
              <p className="copy-lead">
                On Instagram, I make videos that help people solve problems
                quicker and easier.
              </p>
              <p>
                Teaching keeps my own thinking sharp, and it’s how most people
                first find me.
              </p>
              <a
                className="social-card"
                href="https://www.instagram.com/mukeshbeyond/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="social-mark" aria-hidden="true">ig</span>
                <span className="social-card-copy">
                  <span className="eyebrow">INSTAGRAM / @MUKESHBEYOND</span>
                  <strong>Short videos, practical ideas.</strong>
                </span>
                <span className="social-arrow" aria-hidden="true">↗</span>
              </a>
              <h3 className="direction-title">Where I’m headed</h3>
              <p>
                I want to become a top-tier agentic AI engineer: someone who
                ships multi-agent systems that are reliable, observable and
                genuinely useful.
              </p>
              <p>
                Beyond the code, I want to keep teaching in public and build a
                network of people who make things better.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-section section-shell" id="contact">
          <div className="contact-glow" aria-hidden="true" />
          <div className="section-kicker eyebrow">
            <span>05 / LET’S CONNECT</span>
            <span>OPEN TO GOOD CONVERSATIONS</span>
          </div>
          <div className="contact-content">
            <p className="eyebrow contact-overline">
              BUILDERS · FOUNDERS · PEOPLE WITH PROBLEMS WORTH SOLVING
            </p>
            <h2 className="section-title">
              Have a problem
              <br />
              worth solving?
              <br />
              <em>Let’s talk AI.</em>
            </h2>
            <p>
              Whether you’re hiring, building, learning or just curious, say
              hello. I reply to thoughtful messages.
            </p>
            <div className="contact-actions">
              <a
                className="button button-lime"
                href="https://www.linkedin.com/in/mukeshkumr/"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a
                className="button button-lime"
                href="https://outlook.live.com/mail/0/deeplink/compose?to=mukeshkumar.in2%40outlook.com"
                target="_blank"
                rel="noreferrer"
              >
                Email me <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <footer className="site-footer">
            <a className="footer-name" href="#top">
              Mukesh Kumar<span>.</span>
            </a>
            <div className="footer-links">
              <a
                href="https://www.linkedin.com/in/mukeshkumr/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/mukeshkumr"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.instagram.com/mukeshbeyond/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
            <span className="footer-location eyebrow">DELHI, INDIA</span>
            <span className="copyright eyebrow">© 2026 MUKESH KUMAR</span>
          </footer>
        </section>
      </main>
    </>
  );
}
