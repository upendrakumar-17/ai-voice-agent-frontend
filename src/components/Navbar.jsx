import React, { useState } from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  const [selectedDomain, setSelectedDomain] = useState('General');

  const handleChange = (event) => {
    setSelectedDomain(event.target.value);
  };

  return (
    <div className="navbar-container">
      
      {/* Header Section */}
      <div className="navbar-header">
        <div className="navbar-title">AI Assistant</div>
      </div>

      {/* Dropdown Section */}
      <div className="navbar-dropdown-section">
        <div>
            <select
          className="domain-dropdown"
          value={selectedDomain}
          onChange={handleChange}
        >
          <option value="General">General</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Finance">Finance</option>
        </select>
        </div>
        <div className='theme-button'>

        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
