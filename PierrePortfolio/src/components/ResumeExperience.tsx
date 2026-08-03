import '../css/tokens.css'
import '../css/ResumeExperience.css'
import ResumeItem from './ResumeItem.tsx'

function Resume() {
  return (
    <>
      <section id="resume-section">
        <h1>RELEVANT WORK EXPERIENCE</h1>

        <div id="featured-experience">
          <ResumeItem />
          <ResumeItem />
          <ResumeItem />
        </div>
      </section>
    </>
  )
}

export default Resume
