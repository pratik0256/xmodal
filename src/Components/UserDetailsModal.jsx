import React, { useState, useRef } from 'react';
import Form from './RegistrationForm';

function UserDetailsModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalContainerRef = useRef(null);

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  const closeModalHandler = (e) => {
    if (modalContainerRef.current && !modalContainerRef.current.contains(e.target)) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <h2>User Details Modal</h2>
      <button onClick={openModalHandler} style={openButtonStyle}>
        Open Form
      </button>

      {isModalOpen && (
        <div
          className="modal-overlay"
          style={overlayContainerStyle}
          onClick={closeModalHandler} 
        >
          <div className="modal-box" style={modalBoxStyle} ref={modalContainerRef}>
            <Form />
          </div>
        </div>
      )}
    </>
  );
}

const openButtonStyle = {
  padding: '10px 15px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '20px',
};

const overlayContainerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalBoxStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  width: '400px',
  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
};



export default UserDetailsModal;
