// App.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faBars, faBell, faCog, faUser, faMicrophone } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons
import './styles.css'; // Import your CSS file for styling

const routes = [
  'My Dashboard',
  'Teacher',
  'B Student',
  'Attendance',
  'Transport',
  'Fee',
  'Academic',
  'Admissions',
  'Events',
  'Notices',
  'A Complaints',
  'SSS-StudentManagement',
  'Q search'
];

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState('');
  const [activeRoute, setActiveRoute] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [voiceRecognitionSupported, setVoiceRecognitionSupported] = useState(false);
  const recognition = new window.webkitSpeechRecognition(); // Initialize speech recognition

  useEffect(() => {
    setVoiceRecognitionSupported('webkitSpeechRecognition' in window); // Check if speech recognition is supported
  }, []);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSelectRoute = (route) => {
    setSelectedRoute(route);
    setActiveRoute(route); // Update activeRoute when a route is selected
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleVoiceSearch = () => {
    recognition.start(); // Start speech recognition
  };

  recognition.onresult = (event) => {
    const result = event.results[0][0].transcript; // Get the recognized speech
    setSearchQuery(result);
  };

  return (
    <div className="app">
      <div className="topbar">
        <div className="dps-box">
          <FontAwesomeIcon icon={faSquare} className="box-icon" /> DPS
        </div>
        <div className="topbar-search">
          <input type="text" placeholder="Search..." value={searchQuery} onChange={handleSearchInputChange} />
          {voiceRecognitionSupported && (
            <button className="voice-search-button" onClick={handleVoiceSearch}>
              <FontAwesomeIcon icon={faMicrophone} />
            </button>
          )}
        </div>
        <div className="topbar-buttons">
          <button className="topbar-icon" onClick={() => console.log('Ring clicked')}>
            <FontAwesomeIcon icon={faBell} />
          </button>
          <button className="topbar-icon" onClick={() => console.log('Settings clicked')}>
            <FontAwesomeIcon icon={faCog} />
          </button>
          <button className="topbar-icon" onClick={() => console.log('Profile clicked')}>
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
        <div className="sidebar-toggle" onClick={handleToggleSidebar}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </div>
      </div>
      <div className="content-container">
        {isSidebarOpen && (
          <div className="sidebar">
            <Sidebar routes={routes} onSelect={handleSelectRoute} activeRoute={activeRoute} /> {/* Pass activeRoute as prop */}
          </div>
        )}
        <div className="content">
          <Content route={selectedRoute} searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
}

export default App;
