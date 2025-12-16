import React, { useState } from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  const [selectedDomain, setSelectedDomain] = useState('General');

  const handleChange = (event) => {
    setSelectedDomain(event.target.value);
  };

  return (
    <div className="navbar">
      <div className="navbar__header">
        <div className="navbar__theme-toggle"></div>
        <div className="navbar__title">BODHITAMINDS </div>
      </div>

      <div className="navbar__controls">
        <div className="navbar__dropdown-wrapper">
          <select
            className="navbar__dropdown"
            value={selectedDomain}
            onChange={handleChange}
          >
            <option value="General">General</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Finance">Finance</option>
          </select>
        </div>

        <div className="navbar__theme-toggle"></div>
      </div>
    </div>
  );
};

export default Navbar;
