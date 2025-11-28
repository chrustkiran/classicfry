import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeliveryTimeDisplayModal = ({ handleClose, show }) => {
  const isShowinngDeliveryNotAvailableMessage = false; // Change this to false to show delivery hours message
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        {
          isShowinngDeliveryNotAvailableMessage ? (
            <>
              <Modal.Header closeButton>
                <Modal.Title className="delivery-modal-title">Delivery Unavailable</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                We’re sorry for the inconvenience. Delivery service is currently unavailable today. Please check back tomorrow.
                <br></br>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </>

          ) : (
            <>
              <Modal.Header closeButton>
                <Modal.Title className="delivery-modal-title">Delivery Hours: 5:30 PM – 9:30 PM </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                🍽️ We’re currently accepting delivery orders between <strong>5:30 PM and 9:30 PM.</strong>
                <br></br>
                🚚 Delivery is currently available in <strong>Epsom</strong> only. Delivery to <strong>Romford</strong> is temporarily paused.
                <br></br>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </>
          )
        }

      </Modal>
    </>
  );
};

export default DeliveryTimeDisplayModal;
