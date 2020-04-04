import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ProjectCard from "../ProjectCard/ProjectCard";
import Wrapper from "../Wrapper/Wrapper";
import projects from "../../files/projects.json"
import ProjectModal from "../Modal/Modal";
import "./style.css";


class Portfolio extends Component {

    state = {
        projects,
        show: false,
        activeProject: ""
    }


    handleShow = project => {
        this.setState({
            show: true
        })
        this.setState({
            activeProject: project
        });

    }
    handleClose = () => { this.setState({ show: false }) }

    render() {
        return (

            <Container fluid className="text-center" id="portfolio" >
                <Row>
                    <Col className="header">
                        <h1 className="text-center">Portfolio</h1>
                    </Col>
                </Row>
                <Row>
                    <Wrapper>
                        {this.state.projects.map(project => {
                            return (
                                <ProjectCard
                                    key={project.title}
                                    title={project.title}
                                    cardImage={project.cardImage}
                                    modal={this.state.modal}
                                    handleShow={() => this.handleShow(project)}
                                />
                            )
                        })}
                        <ProjectModal
                            show={this.state.show}
                            onHide={this.handleClose}
                            activeProject={this.state.activeProject}
                        />
                    </Wrapper>
                </Row>
            </Container>


        )
    }
}

export default Portfolio;