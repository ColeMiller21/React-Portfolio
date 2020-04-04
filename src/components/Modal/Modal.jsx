import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "./style.css";




function ProjectModal(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter text-center">
                    {props.activeProject.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image src={props.activeProject.modalImage} alt="Project" fluid />
                <p id="text">{props.activeProject.modalText}</p>
                <p id="skills-text"><span id="skills">Skills used: </span>{props.activeProject.skills}</p>
            </Modal.Body>
            <Modal.Footer className="text-center">
                <Button onClick={props.onHide}>Close</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}



export default ProjectModal;