import React from "react";
import { Container } from "reactstrap";
import "./style.css";

function Wrapper(props) {
    return (
        <Container className="project-area">{props.children}</Container>

    )



}

export default Wrapper;

