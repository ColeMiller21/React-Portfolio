import React from "react";
import { Container } from "reactstrap";
import ProjectCard from "../ProjectCard/ProjectCard";
import Wrapper from "../Wrapper/Wrapper";


function Portfolio(props) {

    return (

        <Container className="project-area text-center">
            Portfolio
            <Wrapper>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </Wrapper>
        </Container>


    )
}

export default Portfolio;