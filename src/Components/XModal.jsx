import React, { useState, useRef } from "react";

const XModal = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();

  // Open the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Close the modal if clicked outside the modal content
  const handleCloseModal = (e) => {
    if (modalRef.current === e.target) {
      setIsModalOpen(false);
    }
  };

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form validation and submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, phone, dob } = formData;

    // Check for empty fields
    if (!username || !email || !phone || !dob) {
      alert("Please fill out all the fields.");
      return;
    }

    // Validate email format
    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    // Validate phone number (should be 10 digits)
    if (phone.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    // Validate date of birth (cannot be in the future)
    if (new Date(dob) > new Date()) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }

    // If everything is valid, submit the form
    alert("Form submitted successfully!");
    setFormData({ username: "", email: "", phone: "", dob: "" });
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Open Form Button */}
      <button onClick={handleOpenModal} style={buttonStyle}>
        Open Form
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal" ref={modalRef} onClick={handleCloseModal} style={overlayStyle}>
          <div className="modal-content" style={modalStyle}>
            <h1>Fill Details</h1>
            <form onSubmit={handleSubmit}>
              <div className="formdiv">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="formdiv">
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="formdiv">
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="formdiv">
                <label htmlFor="dob">Date of Birth:</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>
              <button className="submit-button" type="submit" style={submitButtonStyle}>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// Button Styles
const buttonStyle = {
  padding: '10px 15px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

// Overlay Styles
const overlayStyle = {
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

// Modal Styles
const modalStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  width: '400px',
  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
};

// Submit Button Styles
const submitButtonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  padding: '10px 15px',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '4px',
  marginTop: '20px',
};

export default XModal;
