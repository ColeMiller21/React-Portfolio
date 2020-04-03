import React from "react";
import { Container } from "reactstrap";
import "./style.css";

function Home(props) {

    return (

        <Container fluid={true} className="main">
            <div id="home-title" className="text-center">
                <h1 id="name">Hi, I am Cole</h1>
                <h6 id="tag-line">An aspiring Web Developer</h6>
                <a href="./files/Cole Miller_Resume Final.pdf" className="btn btn-outline-dark button">Resume</a>
                <button type="button" className="btn btn-outline-dark button" id="contact-btn">Contact</button>

                <div id="contact">
                    <h6 id="contact-title">Contact</h6>
                    <hr id="small-hr" />
                    <p>Phone Number: (817)-733-2566</p>
                    <p>Email: Cole.t.miller@gmail.com</p>

                </div>
            </div>
        </Container>



    )
}

export default Home;