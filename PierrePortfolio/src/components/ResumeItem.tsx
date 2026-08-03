import '../css/tokens.css'
import '../css/ResumeExperience.css'

function ResumeItem() {
  return (
    <>
      <div className="card resume-item">
        <section className="resume-item-years-worked">
            <h1>Years Worked</h1>
        </section>

        <section className="card-body resume-item-job-description">
            <h1 className="card-title">Job Location</h1>
            <h2>Position Title</h2>

            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            <div className="resume-item-skills-gained-gallery"></div>
        </section>
      </div>
    </>
  )
}

export default ResumeItem