import React, { useState } from 'react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(JSON.stringify(formData));
    }
  };

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {};

    // Email validation
    if (!formData.email) {
      formIsValid = false;
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      newErrors.email = 'Email is invalid';
    }

    // Name validation
    if (!formData.name) {
      formIsValid = false;
      newErrors.name = 'Name is required';
    }

    // Username validation
    if (!formData.username) {
      formIsValid = false;
      newErrors.username = 'Username is required';
    } else if (/\s/.test(formData.username)) {
      formIsValid = false;
      newErrors.username = 'Username cannot contain spaces';
    }

    // Password validation
    if (!formData.password) {
      formIsValid = false;
      newErrors.password = 'Password is required';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[*@%$#])[A-Za-z\d*@%$#]{8,}$/.test(formData.password)) {
      formIsValid = false;
      newErrors.password = `Password does not meet complexity requirements  password length not less than 8
      characters , contains at least one lowercase , one
      uppercase , at least one digit and special character [
      example : *@%$#`;
    }

    // Confirm password validation
    if (formData.confirmPassword !== formData.password) {
      formIsValid = false;
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return formIsValid;
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address:</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} />
          {errors.email && <div className="alert alert-danger">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} />
          {errors.name && <div className="alert alert-danger">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleInputChange} />
          {errors.username && <div className="alert alert-danger">{errors.username}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleInputChange} />
          {errors.password && <div className="alert alert-danger">{errors.password}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
          <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} />
          {errors.confirmPassword && <div className="alert alert-danger">{errors.confirmPassword}</div>}
        </div>
        <button type="submit" className="btn btn-dark">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
