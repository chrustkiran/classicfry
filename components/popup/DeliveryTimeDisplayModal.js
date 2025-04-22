import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeliveryTimeDisplayModal = ({handleClose, show}) => {
  return (
    <>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="delivery-modal-title">Delivery Hours: 5:30 PM – 11:30 PM </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        We’re currently accepting delivery orders between <strong>5:30 PM and 11:30 PM</strong> only.
        Craving something delicious? Order during our delivery window and we’ll bring it hot and fresh to your door!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeliveryTimeDisplayModal;
