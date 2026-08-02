import '../css/tokens.css'
import '../css/ProjectExperience.css'
import ProjectItem from './ProjectItem.tsx'

function Projects() {
  return (
    <>
      <section className="container" id="projects-section">
        <h1>PROJECT EXPERIENCE</h1>

        <div id="project-horizontal-slider">
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
      </section>
    </>
  )
}

export default Projects
