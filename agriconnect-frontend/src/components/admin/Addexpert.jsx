import React, { useState } from 'react';
import Adminlayout from './Adminlayout'; // Import Adminlayout
import './Addexpert.css';

const Addexpert = () => {
  const [expert, setExpert] = useState({
    fullname: '',
    email: '',
    phone: '',
    password: '',
    fieldofexpertise: '',
    experienceyears: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpert({
      ...expert,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (API call, etc.)
    console.log(expert);
  };

  return (
    <Adminlayout>
      <form onSubmit={handleSubmit}>
        <h2>Expert Sign-up</h2>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullname"
            value={expert.fullname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={expert.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={expert.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={expert.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Field of Expertise:</label>
          <input
            type="text"
            name="fieldofexpertise"
            value={expert.fieldofexpertise}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Years of Experience:</label>
          <input
            type="text"
            name="experienceyears"
            value={expert.experienceyears}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </Adminlayout>
  );
};

export default Addexpert;
