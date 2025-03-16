import React, { useState } from 'react';

function RegistrationForm() {
  const [formFields, setFormFields] = useState({
    userName: '',
    userEmail: '',
    userPhone: '',
    birthDate: '',
  });

  const [formErrors, setFormErrors] = useState({
    userNameError: false,
    userEmailError: false,
    userPhoneError: false,
    birthDateError: false,
    emailFormatError: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });

    setFormErrors({ ...formErrors, [name]: false, emailFormatError: false });
  };

  const validateForm = () => {
    const updatedErrors = {
      userNameError: !formFields.userName.trim(),
      userEmailError: !formFields.userEmail.trim(),
      userPhoneError: !formFields.userPhone.trim(),
      birthDateError: !formFields.birthDate.trim(),
      emailFormatError: !formFields.userEmail.includes('@') && formFields.userEmail.trim() !== '',
    };

    return updatedErrors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setFormErrors(validationErrors);

    if (validationErrors.emailFormatError) {
      alert('Invalid email format. Please provide a correct email address.');
      return;
    }

    const phoneNumberValid = /^\d{10}$/.test(formFields.userPhone);
    const today = new Date();
    const dob = new Date(formFields.birthDate);

    if (dob > today) {
      alert('Invalid date of birth. Date of birth cannot be in the future.');
      return;
    }

    if (!phoneNumberValid) {
      alert('Phone number is invalid. Please enter a 10-digit number.');
      return;
    }

    if (Object.values(validationErrors).includes(true)) {
      return;
    }

    console.log('Form submitted successfully:', formFields);
    alert('Form submitted successfully!');
    setFormFields({
      userName: '',
      userEmail: '',
      userPhone: '',
      birthDate: '',
    });
    setFormErrors({});
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '30px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>Registration Form</h2>
      <form onSubmit={handleFormSubmit} noValidate>
        <div style={{ marginBottom: '15px' }}>
          <label>Username:</label>
          <input
            type="text"
            name="userName"
            value={formFields.userName}
            onChange={handleInputChange}
            style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
          />
          {formErrors.userNameError && (
            <span style={{ color: 'red', fontSize: '12px' }}>Please fill out this field</span>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Email Address:</label>
          <input
            type="email"
            name="userEmail"
            value={formFields.userEmail}
            onChange={handleInputChange}
            style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
          />
          {formErrors.userEmailError && (
            <span style={{ color: 'red', fontSize: '12px' }}>Please fill out this field</span>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="userPhone"
            value={formFields.userPhone}
            onChange={handleInputChange}
            style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
          />
          {formErrors.userPhoneError && (
            <span style={{ color: 'red', fontSize: '12px' }}>Please fill out this field</span>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="birthDate"
            value={formFields.birthDate}
            onChange={handleInputChange}
            style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
          />
          {formErrors.birthDateError && (
            <span style={{ color: 'red', fontSize: '12px' }}>Please fill out this field</span>
          )}
        </div>

        <button
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
