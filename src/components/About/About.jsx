import React from "react";
import { Container, Col, Row } from "reactstrap";
import Fade from 'react-reveal/Fade';
import "./style.css";
import skillLogo from "../../images/blue-skills.svg";
import aboutLogo from "../../images/blue-person.svg";
import aboutPicture from "../../images/About-Picture.png"

const aSkills = ["JavaScript", "React.js", "Node.js", "HTML5", "CSS3", "Angular", "RESTful APIs",
    "Bootstrap 4", ".Net Core", "MSSQL"
]

function About() {
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
                                {aSkills.map(skill => {
                                    return (
                                        <tbody>
                                            <tr key={skill}>
                                                <td>{skill}</td>
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
                            <img className="img-thumbnail" id="about-img" src={aboutPicture} alt="profile" />
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
                                        <td> My name is Cole Miller. I am 28 years old currently residing in the Dallas/Fort Worth area.
                                        I graduated from Southern Methodist University's Full Stack Web Development Boot Camp in March 2020.
                                        I am currently working as a Applications Developer at Shockwave Consulting.</td>
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