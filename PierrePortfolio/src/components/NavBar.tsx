import { useState } from "react";
import { Container, Nav, Navbar } from 'react-bootstrap'
import '../css/NavBar.css'

type Props = {
    variant?: 'none' | 'blur'
}

function NavBar({ variant = 'none' }: Props) {
    const variantBg = `navbar sticky-top navbar-expand-lg navbar--${variant}`
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <Navbar
                expand="lg"
                className={variantBg}
                data-bs-theme="dark"
                expanded={expanded}
                onToggle={(isExpanded) => setExpanded(isExpanded)}
            >
                <Container>
                    <Navbar.Brand id="name-brand" href="/">Sanaia Pierre</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                    <Nav onSelect={() => setExpanded(false)}>
                        <Nav.Link href="/#">Home</Nav.Link>
                        <Nav.Link href="/#about">About</Nav.Link>
                        <Nav.Link href="/#projects">Projects</Nav.Link>
                        <Nav.Link href="/#resume">Resume</Nav.Link>
                    </Nav>
                
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar