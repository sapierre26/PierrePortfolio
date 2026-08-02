import linkedinLogo from './assets/icons/linkedin.svg'
import emailLogo from './assets/icons/email.svg'
import githubLogo from './assets/icons/github.svg'
import siteLinkLogo from './assets/icons/site_link.svg'

function ProjectItem() {
  return (
    <>
      <div className="project-item">
        <div className="project-item-tab-rect"></div>

        <section className="project-item-main-rect">
            <h1>Project Title</h1>
            <h2>Project Duration</h2>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            <p>Programming Languages / Software Used</p>
            <ul>
                <li>software</li>
                <li>software</li>
                <li>software</li>
                <li>software</li>
                <li>software</li>
            </ul>

            <div className="project-item-links">
                <img src={linkedinLogo} alt="Light pink Linkedin logo that navigates to my Linkedin profile" />
                <img src={emailLogo} alt="Light pink email logo that navigates to my Gmail" />
                <img src={githubLogo} alt="Light pink GitHub logo that navigates to my GithHub profile" />
                <img src={siteLinkLogo} alt="Light pink site link logo that navigates to the link for this project, if applicable" />
            </div>
        </section>
      </div>
    </>
  )
}

export default ProjectItem
