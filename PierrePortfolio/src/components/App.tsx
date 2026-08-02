import '../css/tokens.css'
import '../css/App.css'
import HeroImage from './HeroImage.tsx'
import NavBar from './NavBar.tsx'
import Header from './Header.tsx'
import About from './AboutMe.tsx'
import Projects from './ProjectExperience.tsx'
import Resume from './ResumeExperience.tsx'
import Footer from './Footer.tsx'

function App() {

  return (
    <>
      <HeroImage />
      
      <div className="background-gradient">
        <NavBar variant="blur" />

        <Header />

        <About />

        <Projects />

        <Resume />

        <Footer />
      </div>
    </>
  )
}

export default App
