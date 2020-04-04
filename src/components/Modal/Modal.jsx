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
            className="modal"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter text-center">
                    {props.activeProject.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image className="modal-image" src={props.activeProject.modalImage} alt="Project" fluid />
                <p id="text">{props.activeProject.modalText}</p>
                <p><span className="bold-text">Skills used: </span>{props.activeProject.skills}</p>
            </Modal.Body>
            <Modal.Footer className="text-center">
                <Button className="modal-button" href={props.activeProject.github} onClick={props.onHide}>GitHub</Button>
                <Button className="modal-button" href={props.activeProject.deployed} onClick={props.onHide} style={(props.activeProject.deployed) ? { display: 'block' } : { display: 'none' }}>Deployed</Button>
            </Modal.Footer>
        </Modal>
    )
}



export default ProjectModal;