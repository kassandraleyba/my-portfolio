import React from 'react';
import './App.css';

function App() {
  const [clicks, setClicks] = React.useState([]);

  const handleClick = (e) => {
    const newClick = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };
    setClicks([...clicks, newClick]);
    
    // Remove click after animation completes
    setTimeout(() => {
      setClicks(prev => prev.filter(click => click.id !== newClick.id));
    }, 1000);
  };

  return (
    <div className="App" onClick={handleClick}>
      {/* Click ripples */}
      {clicks.map(click => (
        <div
          key={click.id}
          className="ripple"
          style={{
            left: click.x,
            top: click.y,
          }}
        />
      ))}

      <header className="header">
        <div className="header-content">
          <a href="#about" className="logo">KASSANDRA LEYBA</a>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <div className="social-icons">
              <a href="https://github.com/kassandraleyba" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/kassandra-leyba/" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section-card about-section">
        <div className="page">
          <h1>About</h1>
          <p className="bio">
            Hi! I'm a software engineer based in Austin, Texas. I love building systems that actually work—backend infrastructure, 
            automation pipelines, and tools that make life easier for teams and users.
          </p>
          <p className="bio">
            When I'm not debugging code or optimizing databases, I'm probably exploring Austin's food, music, and art scene or 
            learning something new. I'm always up for working on projects that matter and collaborating with 
            people who care about what they build.
          </p>
          <p className="bio">
            Want to connect? <a href="mailto:kassandra.leyba@gmail.com">kassandra.leyba@gmail.com</a> or 
            find me on <a href="https://www.linkedin.com/in/kassandra-leyba/" target="_blank" rel="noopener noreferrer">LinkedIn</a>. 
            Let's build something great together!
          </p>

          <h2>Skills</h2>
          <div className="skills">
            <span className="skill">Node.js</span>
            <span className="skill">TypeScript/ JavaScript</span>
            <span className="skill">Ruby on Rails</span>
            <span className="skill">PostgreSQL</span>
            <span className="skill">Strapi</span>
            <span className="skill">APIs</span>
            <span className="skill">CI/CD</span>
            <span className="skill">GitHub Workflow</span>
            <span className="skill">TDD - RSpec/Jest</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-card projects-section">
        <div className="page">
          <h1>Projects</h1>
          
          <div className="project">
            <img 
              src="/images/kindbox-project.png" 
              alt="Kindbox project screenshot" 
              className="project-screenshot" 
            />

            <h2>Kindbox</h2>
            <p className="project-description">
              Built an automated invoice processing and order management system for a local food delivery platform. 
              Developed an OCR-to-database pipeline with change detection, custom invoice parser for multiple formats, 
              and integrated delivery tracking. Implemented scheduling, observability, and data integrity features 
              to ensure reliable backend automation.
            </p>
            <p className="tech-stack">
              <strong>Tech Stack:</strong> Node.js, TypeScript, Ruby on Rails, PostgreSQL, Strapi, Google Drive/Docs/Sheets APIs
            </p>
            <a href="https://www.thekindbox.us/" target="_blank" rel="noopener noreferrer" className="project-link">
              View Project →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-card contact-section-wrapper">
        <div className="page">
          <h1>Contact</h1>
          <div className="contact">
            <p>Email: <a href="mailto:kassandra.leyba@gmail.com">kassandra.leyba@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/kassandra-leyba/" target="_blank" rel="noopener noreferrer">kassandra-leyba</a></p>
            <p>GitHub: <a href="https://github.com/kassandraleyba" target="_blank" rel="noopener noreferrer">kassandraleyba</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;