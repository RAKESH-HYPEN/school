// Content.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute, faUserPlus, faBell, faMapMarkerAlt, faMoneyBill, faChartBar } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons

function Content({ route }) {
  return (
    <div>
      <div className="content">
        {route === 'My Dashboard' && (
          <div>
            <h2>Dashboard</h2>
            <div className="dashboard-buttons">
              <button>Home</button>
              <button>Statistics</button>
              <button>Notice Board</button>
            </div>
          </div>
        )}
        {route === 'Transport' && (
          <div>
            <h3>Transport</h3>
            <div className='transport-buttons-container'>
              <div className='transport-buttons-row'>
                <button>
                  <FontAwesomeIcon icon={faRoute} />
                  <div>Manage Routes</div>
                </button>
                <button>
                  <FontAwesomeIcon icon={faUserPlus} />
                  <div>Add Students to Routes</div>
                </button>
                <button>
                  <FontAwesomeIcon icon={faBell} />
                  <div>Manage Notifications</div>
                </button>
              </div>
              <div className='transport-buttons-row'>
                <button>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <div>Live Tracking</div>
                </button>
                <button>
                  <FontAwesomeIcon icon={faMoneyBill} />
                  <div>Fee Payment</div>
                </button>
                <button>
                  <FontAwesomeIcon icon={faChartBar} />
                  <div>Reports</div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Content;
