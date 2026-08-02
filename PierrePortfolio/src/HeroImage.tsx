import heroImg from './assets/images/banner_image.jpg'
import NavBar from './NavBar.tsx'

function HeroImage() {
    <>
        <div id="hero-image">
            <NavBar />
            
            <img src={heroImg} alt="Graduation photo of Sanaia" />
        </div>
    </>
}

export default HeroImage