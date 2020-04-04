import React from "react";
import { Container, Col, Row } from "reactstrap";
import Fade from 'react-reveal/Fade';
import "./style.css";
import skillLogo from "../../images/blue-skills.svg";
import aboutLogo from "../../images/blue-person.svg";



function About(props) {
    return (
        <Container fluid={true} id="about">
            <Row>
                <Col className="header">
                    <h1 className="text-center">About Me</h1>
                </Col>
            </Row>
            <Row>
                <Col sm={4}>
                    <div className="text-center centerDiv container">
                        <Fade left>
                            <table className="skills-text content">
                                <thead>
                                    <tr className="skills-header">
                                        <th><img src={skillLogo} alt="Skills" /></th>

                                    </tr>
                                </thead>
                                {props.skills.map(skill => {
                                    return (
                                        <tbody>
                                            <tr key={skill.skill}>
                                                <td>{skill.skill}</td>
                                            </tr>
                                        </tbody>
                                    )
                                })}
                            </table>


                        </Fade>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="text-center centerDiv">
                        <div>
                            <img className="img-thumbnail" id="about-img" src="http://placehold.jp/300x400.png" alt="profile" />

                        </div>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="text-center centerDiv container">
                        <Fade right>
                            <table className="about-text content">
                                <thead>
                                    <tr id="about-header">
                                        <img src={aboutLogo} alt="About" />
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> My name is Cole Miller. I am 27 years old currently residing in the Dallas/Fort Worth area.
                                        I graduated from Southern Methodist University's Full Stack Web Development Boot Camp in March 2020.
                                I am currently actively seeking opportunites to learn, grow and contribute in a great company.</td>
                                    </tr>
                                </tbody>

                            </table>
                        </Fade>
                    </div>
                </Col>

            </Row>
        </Container >
    )

}

export default About;