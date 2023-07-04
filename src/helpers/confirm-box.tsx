import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

interface ConfirmProps {
  message: string;
  onConfirm: () => void;
}

const Confirm: React.FC<ConfirmProps> = ({message, onConfirm }) => {
  const [showModal, setShowModal] = useState(false);

  const handleConfirm = () => {
    setShowModal(false);
    onConfirm();
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Delete
      </Button>

      {showModal && (

        <Modal show={showModal} onHide={handleCancel}>
          <Modal.Header closeButton>
            <Modal.Title>Warning</Modal.Title>
          </Modal.Header>
          <Modal.Body>{message}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCancel}>
              Close
            </Button>
            <Button variant="primary" onClick={handleConfirm}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      )}

    </>
  );
};

export default Confirm;
