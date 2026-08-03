import '../css/tokens.css'
import '../css/ResumeExperience.css'

const featuredExperience = {
  "Disney College Program": {
    duration: "Aug. 2026 - PRESENT",
    location: "Disney College Program",
    title: "Recent Grad Participant",
    desc: "Future Tasks: Connected with university students and recent graduates that have a diverse range of studies to strengthen professional network; Attended learning offering classes to obtain personal development skills; Learned about post-program opportunities at Disney and Disney history",
    skills: [
      {
        skill1: "Skill Gained",
        skill2: "Skill Gained",
        skill3: "Skill Gained",
        skill4: "Skill Gained",
        skill5: "Skill Gained",
        skill6: "Skill Gained"
      }
    ]
  },
  "AIP": {
    duration: "July 2025 - PRESENT",
    location: "Cal Poly Office of Academic Innovations & Programs (AIP)",
    title: "Student Web Developer",
    desc: "Maintained Drupal sites and routinely include up-to-date information, news, and resources for AIP and the AIP sub departments; Used images and graphics to display information and increase site engagement for an otherwise limited existing Cal Poly Drupal template, while following the accessibility compliance test",
    skills: [
      {
        skill1: "Figma",
        skill2: "Accessibility (WCAG)",
        skill3: "Drupal (CMS)",
        skill4: "PHP",
        skill5: "Adobe Illustrator",
        skill6: "Canva"
      }
    ]
  },
  "APP": {
    duration: "Aug. 2024 - July 2025",
    location: "Cal Poly Office of Academic Programs & Planning",
    title: "Student Assistant",
    desc: "Worked on an archival project by scanning older physical documents into a shared OneDrive folder that were organized by year, college, department, etc; Assisted with the Making Instructional Documents Accessible to Students (MIDAS) project to update Canvas documents, used by professors, to follow modern accessibility guidelines using Equidox",
    skills: [
      {
        skill1: "Microsoft Excel",
        skill2: "MIcrosoft Word",
        skill3: "OneDrive",
        skill4: "Adobe Suite",
        skill5: "Accessibility (WCAG)",
        skill6: "Equidox"
      }
    ]
  }
}

function Resume() {
  return (
    <>
      <section id="resume">
        <h1>RELEVANT WORK EXPERIENCE</h1>

        <div id="featured-experience">
          {Object.keys(featuredExperience).map((key) => {
            const experience = featuredExperience[key as keyof typeof featuredExperience]

            return (
              <div className="card resume-item">
                <div className="card-body" id="resume-item-body">
                  <section className="resume-item-years-worked">
                    <h1 className="card-title">{experience.duration}</h1>
                  </section>

                  <section className="resume-item-job-description">
                      <h1 className="card-title">{experience.location}</h1>
                      <h2>{experience.title}</h2>

                      <br></br>

                      <p className="card-text">{experience.desc}</p>

                      <br></br>

                      <div className="skills-gained-item-gallery">
                        <div className="item-card"><p>{experience.skills[0].skill1}</p></div>
                        <div className="item-card"><p>{experience.skills[0].skill2}</p></div>
                        <div className="item-card"><p>{experience.skills[0].skill3}</p></div>
                        <div className="item-card"><p>{experience.skills[0].skill4}</p></div>
                        <div className="item-card"><p>{experience.skills[0].skill5}</p></div>
                        <div className="item-card"><p>{experience.skills[0].skill6}</p></div>
                      </div>
                  </section>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Resume
