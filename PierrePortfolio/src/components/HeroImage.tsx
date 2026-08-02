import '../css/tokens.css'
import '../css/HeroImage.css'
import NavBar from './NavBar.tsx'

function HeroImage() {
    return (
        <>
            <div className="hero-image">
                <div className="hero-image-overlay">
                    <NavBar variant="none" />
                </div>
            </div>
        </>
    )
}

export default HeroImage