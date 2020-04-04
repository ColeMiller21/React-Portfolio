import React from "react";
// import { Link } from 'react-router-dom';
import { Container } from "reactstrap";
import "./style.css";
import { Link } from "react-scroll";



function Navbar(props) {
    return (

        <Container fluid={true} id="nav" className="text-center">
            <Link
                className="nav-links"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
            >Home</Link>
            <Link
                className="nav-links"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
            >About</Link>
            <Link
                className="nav-links"
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
            >Portfolio</Link>

        </Container>

    )
}


export default Navbar;