import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <CSSTransition in={isOpen} timeout={300} classNames="modal-transition" unmountOnExit>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-view">
          {children}
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
