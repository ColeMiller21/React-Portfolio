import React from "react";
// import ProjectModal from "../Modal/Modal";
import "./style.css";

function ProjectCard(props) {

    return (
        // <>
        <div className="card" onClick={props.handleShow}>
            <img id="image" src={props.cardImage} alt="placeholder" />
            <div className="card-footer">
                <p className="text-center">{props.title}</p>
            </div>
        </div>
    )
}

export default ProjectCard;
