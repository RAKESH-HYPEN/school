// Welcome.js
import React from 'react';

const Welcome = ({ onSelect }) => {
  const dashboardRoutes = ['My Dashboard', 'Home', 'Statistics', 'Notice Board'];

  return (
    <div className="welcome">
      <h2>Welcome to the Dashboard!</h2>
      <div className="dashboard">
        {dashboardRoutes.map((route, index) => (
          <div key={index}>
            <a href="#" onClick={() => onSelect(route)}>{route}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Welcome;
