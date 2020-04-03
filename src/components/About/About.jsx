import React from "react";
import { Container, Col, Row } from "reactstrap";
import "./style.css";


function About(props) {
    return (
        <Container fluid={true}>
            <Row>
                <Col sm={4}>
                    <div className="text-center centerDiv">
                        <div className="skills-text">

                            <div className="skills-header">
                                Skills
                      </div>
                            <div>
                                <p>JavaScript, React.js, Node.js, HTML5, CSS3, jQuery,
                                RESTful APIs, AJAX, Bootstrap 4, Express.js, MySQL, MongoDB
                            </p>
                            </div>
                        </div>

                    </div>
                </Col>
                <Col sm={4}>
                    <div className="text-center centerDiv">
                        <div>
                            <img className="img-thumbnail" src="http://placehold.jp/300x400.png" alt="profile" />

                        </div>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="text-center centerDiv">
                        <div className="about-text">
                            My name is Cole Miller. I am 27 years old currently residing in the Dallas/Fort Worth area.
                            I
                            graduated high
                            school in 2010 from James Martin High School, where I then joined the United States Army
                            and served
                            honorably for 5 years as an Infantryman. I made it to the rank of E-5 or Sergeant and was a
                            Fire
                            Team Leader
                            with the oversight of 3-5 men. I got out of the Army in 2015 and moved back to Arlington,
                            Texas.
                            Where
                            I
                            worked at Costco as a Tire Center Supervisor. Now I am currently enrolled in the Full Stack
                            Flex
                            Course at
                            Southern Methodist University where I am looking to make a career change into the software
                            development
                            field. I am looking forward to the class and my future in this new adventure and am awaiting
                            the
                            challenges
                            ahead.
                        </div>
                    </div>

                </Col>

            </Row>
        </Container>
    )
}

export default About;