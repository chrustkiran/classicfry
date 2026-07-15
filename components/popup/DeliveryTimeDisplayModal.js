import { useAppContext } from "@/context/AppContext";
import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import HomePopup from "./homePopup";

const DeliveryTimeDisplayModal = ({ handleClose, show }) => {
  const isShowinngDeliveryNotAvailableMessage = true; // Change this to false to show delivery hours message


  const { store } = useAppContext();
  console.log("store", store);


  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        {
         ( isShowinngDeliveryNotAvailableMessage && store === "ROMFORD") ? (
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
            <HomePopup/>
            // <>
            //   <Modal.Header closeButton>
            //     <Modal.Title className="delivery-modal-title">
            //       Delivery Hours
            //     </Modal.Title>
            //   </Modal.Header>

            //   <Modal.Body>
            //     <div style={{ lineHeight: "1.8" }}>
            //       <div>
            //         🍽️ <strong>Epsom:</strong> 5:30 PM – 9:30 PM
            //       </div>
            //       <div>
            //         🍽️ <strong>Romford:</strong> 12:00 PM – 8:30 PM
            //       </div>

            //       <div style={{ marginTop: "12px" }}>
            //         🚚 Delivery available in <strong>Epsom</strong> and <strong>Romford</strong>
            //       </div>
            //     </div>
            //   </Modal.Body>

            //   <Modal.Footer>
            //     <Button variant="secondary" onClick={handleClose}>
            //       Close
            //     </Button>
            //   </Modal.Footer>
            // </>


          )
        }

      </Modal>
    </>
  );
};

export default DeliveryTimeDisplayModal;
