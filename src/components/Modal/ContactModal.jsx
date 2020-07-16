import React from "react";
import Modal from "react-bootstrap/Modal";
import "./style.css";




function ContactModal(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter text-center">
                    <h1 className="text-center">Contact</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p><span className="bold-text">Phone Number:</span><a href="tel:817-733-2566">(817)-733-2566</a> </p>
                <p><span className="bold-text">Email:</span><a href="mailto:cole.t.miller@gmail.com">Cole.t.miller@gmail.com</a></p>
            </Modal.Body>
        </Modal>
    )
}



export default ContactModal;