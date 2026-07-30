import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from 'react';

// function NavBar() {
  
// }

const NavBar = () => {
    <Router>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#about">About Me</Link></li>
            <li><Link to="/#projects">Projects</Link></li>
            <li><Link to="/#resume">Resume</Link></li>
        </ul>
    </Router>
}

export default NavBar