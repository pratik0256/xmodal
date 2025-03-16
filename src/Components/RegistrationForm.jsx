import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userPhone: '',
    userDOB: '',
  });

  const [formErrors, setFormErrors] = useState({
    userName: false,
    userEmail: false,
    userPhone: false,
    userDOB: false,
    emailInvalid: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setFormErrors({ ...formErrors, [name]: false, emailInvalid: false });
  };

  const validateFields = () => {
    const errors = {
      userName: !formData.userName.trim(),
      userEmail: !formData.userEmail.trim(),
      userPhone: !formData.userPhone.trim(),
      userDOB: !formData.userDOB.trim(),
      emailInvalid: !formData.userEmail.includes('@') && formData.userEmail.trim() !== '',
    };

    return errors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFields();
    setFormErrors(validationErrors);

    if (validationErrors.emailInvalid) {
      alert('Invalid email. Please check your email address.');
      return;
    }

    const phoneIsValid = /^\d{10}$/.test(formData.userPhone);

    const currentDate = new Date();
    const selectedDateOfBirth = new Date(formData.userDOB);

    if (selectedDateOfBirth > currentDate) {
      alert('Invalid date of birth. Date of birth cannot be in the future.');
      return;
    }

    if (!phoneIsValid) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }

    if (Object.values(validationErrors).includes(true)) {
      return;
    }

    console.log('Form Submitted Successfully:', formData);
    alert('Form submitted successfully!');
    setFormData({
      userName: '',
      userEmail: '',
      userPhone: '',
      userDOB: '',
    });
    setFormErrors({});
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '30px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>Fill Details</h2>
      <form onSubmit={handleFormSubmit} noValidate>
        <div style={{ marginBottom: '15px' }}>
          <label>Username:</label>
          <input
            type="text"
            name="userName"
            id="userName"
            value={formData.userName}
            onChange={handleInputChange}
            style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
          />
          {formErrors.userName && (
            <span style={{ color: 'red', fontSize: '12px' }}>Please fill out this field</span>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Email Address:</label>
          <input
            id="userEmail"
            name="userEmail"
            type="email"
            value={formData.userEmail}
            onChange={handleInputChange}
            style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
          />
          {formErrors.userEmail && (
            <span style={{ color: 'red', fontSize: '12px' }}>Please fill out this field</span>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Phone Number:</label>
          <input
            type="tel"
            id="userPhone"
            name="userPhone"
            value={formData.userPhone}
            onChange={handleInputChange}
            style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
          />
          {formErrors.userPhone && (
            <span style={{ color: 'red', fontSize: '12px' }}>Please fill out this field</span>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Date of Birth:</label>
          <input
            type="date"
            id="userDOB"
            name="userDOB"
            value={formData.userDOB}
            onChange={handleInputChange}
            style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
          />
          {formErrors.userDOB && (
            <span style={{ color: 'red', fontSize: '12px' }}>Please fill out this field</span>
          )}
        </div>

        <button
          className="submit-button"
          type="submit"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}



export default RegistrationForm;
