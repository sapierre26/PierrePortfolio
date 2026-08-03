import '../css/tokens.css'
import '../css/ProjectExperience.css'
import ProjectItem from './ProjectItem.tsx'

function Projects() {
  return (
    <>
      <section id="projects">
        <h1>FEATURED PROJECT EXPERIENCE</h1>

        <div id="featured-projects">
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
      </section>
    </>
  )
}

export default Projects
