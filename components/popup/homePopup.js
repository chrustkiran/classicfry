import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const HomePopup = ({  }) => {
  const isShowHomePopup = true; // Change this to false to show delivery hours message

  const [showModal, setShowModal] = React.useState(isShowHomePopup);

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        {
          (
           <>
    <Modal.Header closeButton>
      <Modal.Title className="delivery-modal-title">We've rebranded!</Modal.Title>
    </Modal.Header>
    
    <Modal.Body className="text-center p-4">
      <p className="mb-4 fs-5">
        We are pleased to announce that we have rebranded as: <strong>Metros Epsom</strong>
      </p>
      
      <p className="mb-4">
        This website is no longer available.
      </p>
      
      <p className="mb-4">
        For any enquiries, please contact the store directly on: <strong>01 372 650894</strong>
      </p>
      
      <p className="mb-0">
        Thank you for your continued support and we look forward to welcoming you at Metros Epsom.
      </p>
    </Modal.Body>
    
    {/* <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseModal}>
        Close
      </Button>
    </Modal.Footer> */}
  </>
          )
        }

      </Modal>
    </>
  );
};

export default HomePopup;
/*01 372 650894*/