import '../css/tokens.css'
import '../css/Header.css'
import profileImg from '../assets/images/profile_image.png'

function Header() {
  return (
    <>
      <header className="header">
        <img src={profileImg} alt="Headshot of Sanaia" />
        <h1>Hi, I'm Sanaia!</h1>
      </header>
    </>
  )
}

export default Header
