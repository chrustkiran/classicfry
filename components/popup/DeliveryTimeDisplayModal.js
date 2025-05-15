import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeliveryTimeDisplayModal = ({ handleClose, show }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="delivery-modal-title">Delivery Hours: 5:30 PM – 9:30 PM </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          🍽️ We’re currently accepting delivery orders between <strong>5:30 PM and 9:30 PM</strong> only.
          Craving something delicious? Place your order during our delivery window and we’ll bring it hot and fresh to your door!
          <br></br> <br></br>
          💰 <strong>Note: A £2.99</strong> delivery fee applies to all online orders. Want to skip the fee? Just give us a call on <a href="tel:01372650894">01372 650894</a> to place your order.
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
