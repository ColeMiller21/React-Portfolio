import React from "react";
import { Link } from 'react-router-dom';
import { Container } from "reactstrap";
import "./style.css";
// import About from "../About/About";
// import Home from "../Home/Home";
// import Portfolio from "../Portfolio/Portfolio";



function Navbar(props) {
    return (

        <Container fluid={true} id="nav" className="text-center">
            <Link to="/"><p className="links">Home</p></Link>
            <Link to="/about"><p className="links">About</p></Link>
            <Link to="/portfolio"><p className="links">Portfolio</p></Link>
            {/* <span className="float-right">
                <a href="https://www.linkedin.com/in/colemiller21/"><i
                    class="fab fa-linkedin-in fa-2x"></i></a>
                <a href="https://github.com/ColeMiller21"><i
                    class="fab fa-github fa-2x"></i></a>
            </span> */}
        </Container>

    )
}


export default Navbar;