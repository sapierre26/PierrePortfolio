import '../css/tokens.css'
import '../css/ResumeExperience.css'
import SkillGainedItem from './SkillGainedItem.tsx'

function ResumeItem() {
  return (
    <>
      <div className="card resume-item">
        <div className="card-body" id="resume-item-body">
          <section className="resume-item-years-worked">
            <h1 className="card-title">Years Worked</h1>
          </section>

          <section className="resume-item-job-description">
              <h1 className="card-title">Job Location</h1>
              <h2>Position Title</h2>

              <br></br>

              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

              <br></br>

              <div className="skills-gained-item-gallery">
                <SkillGainedItem />
                <SkillGainedItem />
                <SkillGainedItem />
                <SkillGainedItem />
                <SkillGainedItem />
                <SkillGainedItem />
              </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default ResumeItem