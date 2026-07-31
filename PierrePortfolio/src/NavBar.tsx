import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar expand="lg" className="nav-bar-container">
            <Container>
                <Navbar.Brand href="/">Sanaia Pierre</Navbar.Brand>

                <Navbar.Toggle aria-controls="hamburger-nav-menu" />
                <Navbar.Collapse id="hamburger-nav-menu">
                    <Nav className="nav-bar-items">
                        <Nav.Link href="/#home">Home</Nav.Link>
                        <Nav.Link href="/#about">About Me</Nav.Link>
                        <Nav.Link href="/#projects">Projects</Nav.Link>
                        <Nav.Link href="/#resume">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar