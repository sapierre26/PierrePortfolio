import '../css/NavBar.css'

type Props = {
    variant?: 'none' | 'blur'
}

function NavBar({ variant = 'none' }: Props) {
    const variantBg = `navbar sticky-top navbar-expand-lg navbar--${variant}`
    
    return (
        <>
            <nav className={variantBg}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Sanaia Pierre</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav" >
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link active" aria-current="page" href="#about">About</a>
                            <a className="nav-link active" aria-current="page" href="#projects">Projects</a>
                            <a className="nav-link active" aria-current="page" href="#resume">Resume</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar