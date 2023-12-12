import Modal from 'react-modal';

import { GrClose } from "react-icons/gr";

import './Modal.css';

Modal.setAppElement('#root');

export const ModalWindow = ({ isOpen, isClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={isClose}
      overlayClassName={'modal-overlay'}
      className={'modal-content'}
      closeTimeoutMS={300}
    >
      <button type="button" className="modal-close-button" onClick={() => isClose()}>
        <GrClose/>
      </button>
      {children}
      <button className="modal-rental-button" onClick={() => window.location.href = 'tel:+380730000000'}>Rental car</button>
    </Modal>
  );
};

