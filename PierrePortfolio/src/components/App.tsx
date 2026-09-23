import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../css/tokens.css'
import '../css/App.css'
import HeroImage from './HeroImage.tsx'
import NavBar from './NavBar.tsx'
import Header from './Header.tsx'
import About from './AboutMe.tsx'
import Projects from './ProjectExperience.tsx'
import ViewAllProjects from './ViewAllProjects.tsx'
import Resume from './ResumeExperience.tsx'
import Footer from './Footer.tsx'

function App() {
  return (
    <BrowserRouter basename="/PierrePortfolio">
      <Routes>
        <Route
          path="/"
          element={
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
          }
        />

        <Route
          path="/viewallprojects"
          element={
            <>
              <div className="background-gradient">
                <NavBar variant="blur" />
                <ViewAllProjects />
              </div>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
