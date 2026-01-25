import type { Metadata } from "next";
import HomeScripts from "./HomeScripts";

export const metadata: Metadata = {
  title: "Syed Mohammad Hussain Naqvi - Senior Frontend Developer",
  description:
    "Senior Frontend Developer with 5+ years of experience creating scalable, high-performance web applications. Expert in React.js, Next.js, and modern web technologies.",
  keywords: [
    "Syed Mohammad Hussain Naqvi",
    "senior frontend developer",
    "React.js developer",
    "Next.js",
    "TypeScript",
    "web developer",
    "software engineer",
  ],
  authors: [{ name: "Syed Mohammad Hussain Naqvi" }],
  openGraph: {
    title: "Syed Mohammad Hussain Naqvi - Senior Frontend Developer",
    description:
      "Senior Frontend Developer with 5+ years of experience creating scalable, high-performance web applications. Expert in React.js, Next.js, and modern web technologies.",
    url: "https://smhn.me",
    siteName: "Syed Mohammad Hussain Naqvi",
    images: [{ url: "/images/user-3.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Mohammad Hussain Naqvi - Senior Frontend Developer",
    description:
      "Senior Frontend Developer with 5+ years of experience creating scalable, high-performance web applications. Expert in React.js, Next.js, and modern web technologies.",
    images: ["/images/user-3.png"],
  },
};

export default function HomePage() {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar" id="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">SMHN</span>
          </div>
          <div className="nav-menu" id="nav-menu">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#experience" className="nav-link">
              Experience
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>
          <div className="nav-toggle" id="nav-toggle" aria-label="Toggle menu" role="button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text" data-aos="fade-up" data-aos-duration="1000">
              <div className="greeting">
                <svg
                  className="hand-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M5.946 30.785c-2.999 7.189 2.213 15.866 9.784 17.387c-5.9-3.962-9.584-10.327-9.784-17.387"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M15.73 48.172l-.184-.039c.023.006.078.015.184.039"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M2 44.261c.489 6.02 8.039 9.878 13.457 7.412C9.879 50.475 6.179 49.378 2 44.261"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M46.504 22.794c3.512-7.168-1.475-16.036-9.055-17.963c5.799 4.233 9.239 10.824 9.055 17.963"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M48.865 17.848c4.192-3.709 2.502-11.088-2.332-13.49c2.33 4.565 3.151 8.421 2.332 13.49"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M60.519 14.345a5.43 5.43 0 0 0-3.303-1.116c-7.206 0-8.498 9.386-10.097 13.05c0 0-7.389-15.469-9.959-20.573c-2.65-5.265-8.307-4.177-9.964-1.311C23.26.316 15.823 3.609 16.771 8.568c-5.104-.392-7.167 4.643-6.034 7.871c-3.945-.122-5.789 4.757-4.455 8.25c.069.182 7.073 13.966 8.959 18.662c.219.545.44 1.128.672 1.742c1.525 4.032 3.614 9.554 8.84 13.989C27.003 60.991 30.118 62 33.764 62c6.426 0 13.581-3.189 18.229-8.126c4.163-4.421 6.158-9.848 5.77-15.695c-.348-5.256 1.324-10.208 2.667-14.188c1.457-4.319 2.607-7.731.089-9.646m-5.947 23.66c.813 11.628-10.842 21.439-20.73 21.439c-3.021 0-6.15-.488-8.105-2.147c-5.606-4.758-7.013-10.646-8.638-14.684c-1.941-4.831-6.705-14.114-9.014-18.784c-.945-1.912.634-5.981 3.384-5.981L19.4 34.716l3.005 1.804s-6.882-14.998-9.061-20.167c-1.272-3.018.92-6.662 3.874-6.187l9.846 21.016l3.006 1.808L18.594 8.757c-.046-4.295 5.831-4.362 7.197-1.854c3.457 6.348 9.947 20.279 9.947 20.279l3.004 1.807L27.969 6.146c2.104-2.754 5.816-2.368 7.416.975c1.922 4.015 10.061 21.454 10.061 21.454c-8.035 3.012-13.52 11.743-7.777 20.35c-4.557-9.41 3.516-16.06 8.285-18.258c1.805-.833 2.469-2.408 2.469-2.408l-.004.001c.629-1.139.592-2.662 1.342-5.127c1.625-5.335 3.854-8.162 7.125-8.162c.754 0 1.704.564 2.14 1.207c2.203 3.251-5.21 11.023-4.454 21.827"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>Hello, I&apos;m</span>
              </div>
              <h1 className="hero-title">
                <span className="name-highlight">Syed Mohammad Hussain Naqvi</span>
              </h1>
              <h2 className="hero-subtitle">
                <span className="typing-text">Senior Frontend Developer</span>
              </h2>
              <p className="hero-description">
                Creating exceptional digital experiences with modern web technologies. Passionate about
                building scalable, user-centric applications that drive business success.
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">
                  <span>View My Work</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
                <a href="#contact" className="btn btn-secondary">
                  <span>Get In Touch</span>
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
              <div className="social-links">
                <a
                  href="https://github.com/smhnaqvi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  data-tooltip="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/smhnaqvi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  data-tooltip="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://twitter.com/_smhnaqvi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  data-tooltip="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/smhn.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  data-tooltip="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div
              className="hero-image"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="image-container">
                <div className="profile-image">
                  <div className="profile-image__mask" aria-hidden="true">
                    <img
                      className="profile-image__img profile-image__img--masked"
                      src="/images/profile-image.png"
                      alt=""
                    />
                  </div>
                  <img
                    className="profile-image__img profile-image__img--overflow"
                    src="/images/profile-image.png"
                    alt="Syed Mohammad Hussain Naqvi"
                  />
                </div>
                <div className="floating-elements">
                  <div className="tech-badge react">
                    <i className="fab fa-react"></i>
                    <span>React</span>
                  </div>
                  <div className="tech-badge nextjs">
                    <i className="fas fa-code"></i>
                    <span>Next.js</span>
                  </div>
                  <div className="tech-badge typescript">
                    <i className="fab fa-js-square"></i>
                    <span>TypeScript</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow">
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Get to know me better</p>
          </div>
          <div className="about-content">
            <div className="about-text" data-aos="fade-right" data-aos-duration="800">
              <div className="about-intro">
                <h3>
                  Hello There!
                  <svg
                    className="hand-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M5.946 30.785c-2.999 7.189 2.213 15.866 9.784 17.387c-5.9-3.962-9.584-10.327-9.784-17.387"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M15.73 48.172l-.184-.039c.023.006.078.015.184.039"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M2 44.261c.489 6.02 8.039 9.878 13.457 7.412C9.879 50.475 6.179 49.378 2 44.261"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M46.504 22.794c3.512-7.168-1.475-16.036-9.055-17.963c5.799 4.233 9.239 10.824 9.055 17.963"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M48.865 17.848c4.192-3.709 2.502-11.088-2.332-13.49c2.33 4.565 3.151 8.421 2.332 13.49"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M60.519 14.345a5.43 5.43 0 0 0-3.303-1.116c-7.206 0-8.498 9.386-10.097 13.05c0 0-7.389-15.469-9.959-20.573c-2.65-5.265-8.307-4.177-9.964-1.311C23.26.316 15.823 3.609 16.771 8.568c-5.104-.392-7.167 4.643-6.034 7.871c-3.945-.122-5.789 4.757-4.455 8.25c.069.182 7.073 13.966 8.959 18.662c.219.545.44 1.128.672 1.742c1.525 4.032 3.614 9.554 8.84 13.989C27.003 60.991 30.118 62 33.764 62c6.426 0 13.581-3.189 18.229-8.126c4.163-4.421 6.158-9.848 5.77-15.695c-.348-5.256 1.324-10.208 2.667-14.188c1.457-4.319 2.607-7.731.089-9.646m-5.947 23.66c.813 11.628-10.842 21.439-20.73 21.439c-3.021 0-6.15-.488-8.105-2.147c-5.606-4.758-7.013-10.646-8.638-14.684c-1.941-4.831-6.705-14.114-9.014-18.784c-.945-1.912.634-5.981 3.384-5.981L19.4 34.716l3.005 1.804s-6.882-14.998-9.061-20.167c-1.272-3.018.92-6.662 3.874-6.187l9.846 21.016l3.006 1.808L18.594 8.757c-.046-4.295 5.831-4.362 7.197-1.854c3.457 6.348 9.947 20.279 9.947 20.279l3.004 1.807L27.969 6.146c2.104-2.754 5.816-2.368 7.416.975c1.922 4.015 10.061 21.454 10.061 21.454c-8.035 3.012-13.52 11.743-7.777 20.35c-4.557-9.41 3.516-16.06 8.285-18.258c1.805-.833 2.469-2.408 2.469-2.408l-.004.001c.629-1.139.592-2.662 1.342-5.127c1.625-5.335 3.854-8.162 7.125-8.162c.754 0 1.704.564 2.14 1.207c2.203 3.251-5.21 11.023-4.454 21.827"
                      fill="currentColor"
                    ></path>
                  </svg>
                </h3>
                <div className="trust-indicator">
                  <i className="fas fa-shield-alt"></i>
                  <span>Trusted by 50+ Clients</span>
                </div>
                <p>
                  I&apos;m a <span className="trust-highlight">Senior Frontend Developer</span> with
                  over 5 years of experience creating scalable, high-performance web applications
                  that enhance user engagement and drive business success.
                </p>
                <p>
                  I specialize in modern technologies including{" "}
                  <span className="trust-highlight">React.js</span>,{" "}
                  <span className="trust-highlight">Next.js</span>, and{" "}
                  <span className="trust-highlight">TypeScript</span>, with a strong foundation in
                  backend development using <span className="trust-highlight">PHP</span> and{" "}
                  <span className="trust-highlight">Golang</span>.
                </p>
                <p>
                  My expertise lies in developing responsive, user-centric interfaces and
                  integrating seamless API functionality, ensuring optimal user experiences across
                  all devices. I&apos;m passionate about UI/UX improvements and leveraging innovative
                  solutions to meet project goals.
                </p>
              </div>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Technologies</div>
                </div>
              </div>
            </div>
            <div className="about-info" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
              <div className="info-card">
                <h4>Personal Information</h4>
                <div className="info-list">
                  <div className="info-item">
                    <span className="info-label">Full Name</span>
                    <span className="info-value">Syed Mohammad Hussain Naqvi</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Phone</span>
                    <span className="info-value">+92 328 753 8988</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Email</span>
                    <span className="info-value">smhnaqvi111@gmail.com</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Location</span>
                    <span className="info-value">Lahore, Pakistan</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Availability</span>
                    <span className="info-value available">Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Experience &amp; Education</h2>
            <p className="section-subtitle">My professional journey</p>
          </div>

          {/* NOTE: For brevity we keep the structure; content is preserved from the old template. */}
          <div className="timeline-container">
            <div className="timeline">
              <div className="timeline-section">
                <h3 className="timeline-section-title" data-aos="fade-up">
                  Work Experience
                </h3>

                <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
                  <div className="timeline-marker">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4>Senior Frontend Developer</h4>
                      <span className="company">Calibrion AI</span>
                      <span className="duration">Jan 2023 - Present</span>
                    </div>
                    <div className="timeline-body">
                      <ul>
                        <li>Developed reusable UI components using React.js</li>
                        <li>Implemented responsive design principles</li>
                        <li>Collaborated with UX designers and backend developers</li>
                        <li>Integrated RESTful APIs into frontend architecture</li>
                      </ul>
                    </div>
                    <div className="timeline-tech">
                      <span className="tech-tag">React.js</span>
                      <span className="tech-tag">Material UI</span>
                      <span className="tech-tag">TypeScript</span>
                      <span className="tech-tag">RESTful APIs</span>
                    </div>
                  </div>
                </div>

                <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
                  <div className="timeline-marker">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4>Frontend Developer</h4>
                      <span className="company">Philia</span>
                      <span className="duration">Jun 2023 - Present</span>
                    </div>
                    <div className="timeline-body">
                      <ul>
                        <li>Built dual dashboard panels for business and client users</li>
                        <li>Utilized React.js, Material UI, and React Query</li>
                        <li>Developed interactive game components</li>
                        <li>Enhanced overall UI/UX for responsive interface</li>
                      </ul>
                    </div>
                    <div className="timeline-tech">
                      <span className="tech-tag">React.js</span>
                      <span className="tech-tag">Material UI</span>
                      <span className="tech-tag">React Query</span>
                      <span className="tech-tag">Next.js</span>
                    </div>
                  </div>
                </div>

                <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
                  <div className="timeline-marker">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4>Frontend Developer</h4>
                      <span className="company">Limoo Host</span>
                      <span className="duration">Apr 2022 - Present</span>
                    </div>
                    <div className="timeline-body">
                      <ul>
                        <li>Designed campaign websites using HTML5, CSS3, and JavaScript</li>
                        <li>Created custom UI component library</li>
                        <li>Improved developer productivity</li>
                        <li>Implemented responsive, SEO-friendly interfaces</li>
                      </ul>
                    </div>
                    <div className="timeline-tech">
                      <span className="tech-tag">HTML5</span>
                      <span className="tech-tag">CSS3</span>
                      <span className="tech-tag">JavaScript</span>
                      <span className="tech-tag">SEO</span>
                    </div>
                  </div>
                </div>

                <div className="timeline-item" data-aos="fade-up" data-aos-delay="400">
                  <div className="timeline-marker">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4>Full-stack Developer</h4>
                      <span className="company">Deviatech</span>
                      <span className="duration">Feb 2019 - Mar 2022</span>
                    </div>
                    <div className="timeline-body">
                      <ul>
                        <li>Developed and maintained multiple web applications</li>
                        <li>Worked across the full stack using PHP, MySQL, JavaScript, and Golang</li>
                        <li>Enhanced user interfaces for better usability and responsiveness</li>
                        <li>Optimized application performance through efficient coding practices</li>
                      </ul>
                    </div>
                    <div className="timeline-tech">
                      <span className="tech-tag">PHP</span>
                      <span className="tech-tag">MySQL</span>
                      <span className="tech-tag">JavaScript</span>
                      <span className="tech-tag">Golang</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline-section">
                <h3 className="timeline-section-title" data-aos="fade-up">
                  Education
                </h3>

                <div className="timeline-item" data-aos="fade-up" data-aos-delay="500">
                  <div className="timeline-marker education">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4>Associate Degree in Computer Software Engineering</h4>
                      <span className="company">Islamic Azad University, Mashhad - Iran</span>
                      <span className="duration">2022 - 2025</span>
                    </div>
                  </div>
                </div>

                <div className="timeline-item" data-aos="fade-up" data-aos-delay="600">
                  <div className="timeline-marker education">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4>High School</h4>
                      <span className="company">Navvab Safavi, Mashhad - Iran</span>
                      <span className="duration">2018 - 2021</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Skills &amp; Technologies</h2>
            <p className="section-subtitle">Technologies I work with</p>
          </div>
          <div className="skills-grid">
            <div className="skill-category" data-aos="fade-up" data-aos-delay="100">
              <div className="category-header">
                <i className="fab fa-react"></i>
                <h3>Frontend Development</h3>
              </div>
              <div className="skills-list">
                <div className="skill-item">
                  <span className="skill-name">React.js</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="95%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Next.js</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="90%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">TypeScript</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="85%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">JavaScript</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="95%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Material UI</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="90%"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-category" data-aos="fade-up" data-aos-delay="200">
              <div className="category-header">
                <i className="fas fa-code"></i>
                <h3>State Management</h3>
              </div>
              <div className="skills-list">
                <div className="skill-item">
                  <span className="skill-name">Redux</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="85%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Zustand</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="80%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">React Query</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="90%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">React Hook Form</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="85%"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-category" data-aos="fade-up" data-aos-delay="300">
              <div className="category-header">
                <i className="fas fa-tools"></i>
                <h3>Development Tools</h3>
              </div>
              <div className="skills-list">
                <div className="skill-item">
                  <span className="skill-name">HTML5</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="95%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">CSS3</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="90%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Git</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="85%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Webpack</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="80%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Vite</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="85%"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-category" data-aos="fade-up" data-aos-delay="400">
              <div className="category-header">
                <i className="fas fa-server"></i>
                <h3>Backend &amp; Database</h3>
              </div>
              <div className="skills-list">
                <div className="skill-item">
                  <span className="skill-name">Node.js</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="75%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">PHP</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="80%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Golang</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="70%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">MySQL</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width="80%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Some of my recent work</p>
          </div>
          <div className="projects-grid">
            <div className="project-card" data-aos="fade-up" data-aos-delay="100">
              <div className="project-image">
                <img src="/images/portfolio-1.jpg" alt="Calibrion AI" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href="https://www.calibrion.ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href="#" className="project-link" aria-label="Source code">
                      <i className="fas fa-code"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>Calibrion AI</h3>
                <p>
                  AI-powered platform for data analysis and business intelligence with advanced
                  React.js frontend and Django backend.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React.js</span>
                  <span className="tech-tag">Material UI</span>
                  <span className="tech-tag">React Query</span>
                  <span className="tech-tag">Zustand</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Django</span>
                </div>
              </div>
            </div>

            <div className="project-card" data-aos="fade-up" data-aos-delay="200">
              <div className="project-image">
                <img src="/images/portfolio-2.jpg" alt="Philia" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href="https://philia.vip/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href="#" className="project-link" aria-label="Source code">
                      <i className="fas fa-code"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>Philia</h3>
                <p>
                  Social platform with dual dashboard system for business and client users, featuring
                  interactive game components.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React.js</span>
                  <span className="tech-tag">Material UI</span>
                  <span className="tech-tag">React Query</span>
                  <span className="tech-tag">Next.js</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Django</span>
                </div>
              </div>
            </div>

            <div className="project-card" data-aos="fade-up" data-aos-delay="300">
              <div className="project-image">
                <img src="/images/portfolio-3.jpg" alt="Zoneit" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href="https://zoneit.cloud/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href="#" className="project-link" aria-label="Source code">
                      <i className="fas fa-code"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>Zoneit</h3>
                <p>
                  Cloud hosting platform with modern UI/UX design and responsive interface built with
                  React.js and Next.js.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">HTML5</span>
                  <span className="tech-tag">CSS3</span>
                  <span className="tech-tag">React.js</span>
                  <span className="tech-tag">Next.js</span>
                </div>
              </div>
            </div>

            <div className="project-card" data-aos="fade-up" data-aos-delay="400">
              <div className="project-image">
                <img src="/images/portfolio-4.jpg" alt="Deviatech" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href="https://deviatech.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href="#" className="project-link" aria-label="Source code">
                      <i className="fas fa-code"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>Deviatech</h3>
                <p>Full-stack web application with seamless frontend-backend integration using modern technologies.</p>
                <div className="project-tech">
                  <span className="tech-tag">MySQL</span>
                  <span className="tech-tag">Golang</span>
                  <span className="tech-tag">React.js</span>
                  <span className="tech-tag">Next.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Let&apos;s Work Together</h2>
            <p className="section-subtitle">Ready to bring your ideas to life</p>
          </div>
          <div className="contact-content">
            <div className="contact-info" data-aos="fade-right" data-aos-duration="800">
              <div className="contact-card trust-card">
                <h3>Get In Touch</h3>
                <div className="trust-indicator">
                  <i className="fas fa-clock"></i>
                  <span>Available for New Projects</span>
                </div>
                <p>
                  With over 5 years of experience in frontend development and a proven track record of creating
                  scalable web applications using React.js, Next.js, and modern technologies, I&apos;m ready to
                  bring value to your next project.
                </p>
                <div className="contact-details">
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <div>
                      <h4>Email</h4>
                      <p>smhnaqvi111@gmail.com</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <div>
                      <h4>Phone</h4>
                      <p>+92 328 753 8988</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                      <h4>Location</h4>
                      <p>Lahore, Pakistan</p>
                    </div>
                  </div>
                </div>
                <div className="social-links">
                  <a
                    href="https://github.com/smhnaqvi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/smhnaqvi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://twitter.com/_smhnaqvi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/smhn.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-form" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
              <form className="form">
                <div className="form-group">
                  <input type="text" id="name" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" id="email" className="form-control" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" id="subject" className="form-control" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea
                    id="message"
                    className="form-control"
                    rows={6}
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  <span>Send Message</span>
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-text">
              <p>&copy; 2025 Syed Mohammad Hussain Naqvi. All rights reserved.</p>
              <p>
                Made with{" "}
                <svg
                  className="heart-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.61C2.1283 5.6417 1.5487 7.04097 1.5487 8.5C1.5487 9.95903 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39467C21.7563 5.72723 21.351 5.1208 20.84 4.61Z"
                    fill="currentColor"
                  />
                </svg>{" "}
                and modern web technologies
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <div className="back-to-top" id="backToTop" aria-label="Back to top">
        <i className="fas fa-chevron-up"></i>
      </div>

      <HomeScripts />
    </>
  );
}

