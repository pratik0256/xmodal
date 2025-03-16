import React, { useState, useRef, useEffect } from "react";

const UserModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    dateOfBirth: "",
  });

  const modalContainerRef = useRef();

  // Close the modal if clicked outside the modal content
  const closeModalHandler = (e) => {
    if (modalContainerRef.current === e.target) {
      closeModal(false);
    }
  };

  // Handle input changes and update the form state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate and submit the form data
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { fullName, emailAddress, phoneNumber, dateOfBirth } = formData;

    // Check if phone number is valid
    if (phoneNumber.length < 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return false;
    }

    // Check if date of birth is in the future
    if (new Date(dateOfBirth).getTime() >= new Date().getTime()) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return false;
    }

    // If valid, alert user details and close modal
    alert(`Full Name: ${fullName}, Email Address: ${emailAddress}, Phone: ${phoneNumber}, DOB: ${dateOfBirth}`);
    closeModal(false);
  };

  useEffect(() => {
    // If you need to perform any side effects on mount or when formData changes
    console.log(formData);
  }, [formData]);

  return (
    <div className="modal" ref={modalContainerRef} onClick={closeModalHandler}>
      <div className="modal-content">
        <h1 className="formTitle">Fill Details</h1>
        <form className="form" onSubmit={handleFormSubmit}>
          <div className="formdiv">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className="formdiv">
            <label htmlFor="emailAddress">Email Address:</label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              required
              value={formData.emailAddress}
              onChange={handleInputChange}
            />
          </div>
          <div className="formdiv">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              required
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="formdiv">
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              required
              value={formData.dateOfBirth}
              onChange={handleInputChange}
            />
          </div>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
