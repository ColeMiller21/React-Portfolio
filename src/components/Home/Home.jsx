import React, { Component } from "react";
import { Container } from "reactstrap";
import Navbar from "../Navbar/Navbar";
import Resume from "../../files/Cole-Miller-Resume.pdf"
import ContactModal from "../Modal/ContactModal";
import "./style.css";

class Home extends Component {

    state = {
        show: false
    }

    handleShow = () => { this.setState({ show: true }) }

    handleClose = () => { this.setState({ show: false }) }

    render() {
        return (

            <Container fluid={true} className="main" id="home">
                <Navbar />
                <div id="home-title" className="text-center">
                    <h1 id="name">Hi, I am Cole</h1>
                    <h6 id="tag-line">A Web Developer</h6>
                    <a href={Resume} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark button">Resume</a>
                    <button type="button" className="btn btn-outline-dark button" id="contact-btn" onClick={this.handleShow}>Contact</button>
                    <div id="links">
                        <a href="https://www.linkedin.com/in/colemiller21/" target="_blank" rel="noopener noreferrer"><i
                            className="fab fa-linkedin-in fa-2x site-link"></i></a>
                        <a href="https://github.com/ColeMiller21" target="_blank" rel="noopener noreferrer"><i
                            className="fab fa-github fa-2x site-link"></i></a>
                    </div>
                </div>
                <ContactModal
                    show={this.state.show}
                    onHide={this.handleClose}
                    activeProject={this.state.activeProject} />
            </Container>
        )
    }
}

export default Home;