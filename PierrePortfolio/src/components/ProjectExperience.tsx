import '../css/tokens.css'
import '../css/ProjectExperience.css'
import linkedinLogo from '../assets/icons/linkedin.svg'
import emailLogo from '../assets/icons/email.svg'
import githubLogo from '../assets/icons/github.svg'
import siteLinkLogo from '../assets/icons/site_link.svg'

const featuredProjects = {
  "Pierre Portfolio": {
    title: "Pierre Portfolio",
    duration: "July - August 2026",
    desc: "This is my online portfolio, designed in Figma and built using Vite, React, and Bootstrap. It’s meant for me to practice my Web Dev skills and showcase the projects I’ve worked on.",
    techStack: [
      { item1: "React / Bootstrap",
        item2: "Vite (frontend)",
        item3: "TypeScript / HTML / CSS",
      }
    ],
    gitHubLink: "https://github.com/sapierre26/PierrePortfolio",
    siteLink: "",
  },
  "Movie Night Website": {
    title: "Movie Night Website",
    duration: "September - December 2025",
    desc: "A movie library website created to strengthen my skills in Dynamic Web Development. Some features include a genre filter, user login and authentication, and theme switch.",
    techStack: [
      { item1: "Vite (frontend) / Express (backend)",
        item2: "MongoDB Compass",
        item3: "JavaScript (Node.js) / TypeScript",
      }
    ],
    gitHubLink: "https://github.com/sapierre26/MovieNight",
    siteLink: "https://movienight-2r9f.onrender.com/",
  },
  "Trivia GO! Mobile App": {
    title: "Trivia GO! Mobile App",
    duration: "January - April 2026",
    desc: "A trivia game mobile application created to strengthen my skills in Mobile App Development. Some features include a game timer, varying question times, and score tracking.",
    techStack: [
      { item1: "Android Studio",
        item2: "Kotlin (Java)",
        item3: "Jetpack Compose",
      }
    ],
    gitHubLink: "https://github.com/sapierre26/TriviaGame",
    siteLink: "",
  }
}

function Projects() {
  return (
    <>
      <section id="projects">
        <h1>FEATURED PROJECT EXPERIENCE</h1>

        <div id="featured-projects">
          {Object.keys(featuredProjects).map((key) => {
            const project = featuredProjects[key as keyof typeof featuredProjects]

            return (
              <div className="card project-item" key={project.title}>
                <div className="project-item-tab-rect"></div>

                <section className="card-body project-item-main-rect">
                  <h1 className="card-title">{project.title}</h1>
                  <h2>{project.duration}</h2>

                  <p className="card-text">{project.desc}</p>

                  <p>Programming Languages</p>
                  <ul>
                    <li>{project.techStack[0].item1}</li>
                    <li>{project.techStack[0].item2}</li>
                    <li>{project.techStack[0].item3}</li>
                  </ul>

                  <div className="project-item-links">
                    <a href="https://www.linkedin.com/in/sanaia-pierre-7104a8207/"><img src={linkedinLogo} alt="Light pink Linkedin logo that navigates to my Linkedin profile" /></a>
                    <a href="mailto:sgpierre2003@gmail.com"><img src={emailLogo} alt="Light pink email logo that navigates to my Gmail" /></a>
                    <a href={project.gitHubLink}><img src={githubLogo} alt="Light pink GitHub logo that navigates to my GithHub profile" /></a>
                    <a href={project.siteLink}><img src={siteLinkLogo} alt="Light pink site link logo that navigates to the link for this project, if applicable" /></a>
                  </div>
                </section>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Projects
