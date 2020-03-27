import React from "react";
import { Link } from 'react-router-dom';
import { Container } from "reactstrap";
import "./style.css";
// import About from "../About/About";
// import Home from "../Home/Home";
// import Portfolio from "../Portfolio/Portfolio";



function Navbar(props) {
    return (
        <div>
            <Container fluid id="nav" className="text-center">
                <Link to="/"><p className="links">Home</p></Link>
                <Link to="/about"><p className="links">About</p></Link>
                <Link to="/portfolio"><p className="links">Portfolio</p></Link>
                <span className="float-right">
                    <a href="#">linkedin</a>
                    <a href="#">github</a>
                </span>
            </Container>
        </div>
    )
}


export default Navbar;