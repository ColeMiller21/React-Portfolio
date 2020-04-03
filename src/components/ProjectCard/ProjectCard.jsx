import React from "react";
import "./style.css";
import { Button } from "reactstrap";

function ProjectCard(props) {

    return (
        <div className="card">
            <img id="image" src="https://via.placeholder.com/350x300/4444cc" alt="placeholder" />
            <Button color="primary">primary</Button>{' '}
        </div>
    )
}

export default ProjectCard;
