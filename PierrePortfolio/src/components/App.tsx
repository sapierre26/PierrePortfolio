import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from "react"
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

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <div className="background-gradient">
        <BrowserRouter basename="/PierrePortfolio">
          <ScrollToTop />
          
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroImage />

                  <div>
                    <NavBar variant="blur" />
                    <Header />
                    <About />
                    <Projects />
                    <Resume />
                  </div>
                </>
              }
            />

            <Route path="/viewallprojects" element={<ViewAllProjects />} />
          </Routes>
        </BrowserRouter>

        <Footer />
      </div>
    </>
  )
}

export default App

// <div className="background-gradient">
    //   <Routes>
    //     <Route 
    //       path="/"
    //       element={
    //         <>
    //           <HeroImage />

    //            <div>
    //              <NavBar variant="blur" />
    //              <Header />
    //              <About />
    //              <Projects />
    //               <Resume />
    //              <Footer />
    //             </div>
    //         </>
    //       }
    //     />
    //     <Route path="/viewallprojects" element={<ViewAllProjects />} />
    //   </Routes>
    // </div>