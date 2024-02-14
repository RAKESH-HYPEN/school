// Sidebar.js
import React from 'react';

const Sidebar = ({ routes, onSelect, activeRoute }) => {
  return (
    <div className="sidebar">
      {routes.map((route, index) => (
        <div key={index} className={route === activeRoute ? "sidebar-item active" : "sidebar-item"} onClick={() => onSelect(route)}>
          {route}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
