import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import IPhone from './pages/Iphone/Iphone';
import Building from './pages/Building/Building';


function App() {
  return (
    <Router>
      <Routes>
        {/* Define the routes for your pages */}
        <Route path="/" element={
            <div>
            <h1>Welcome to the React Project</h1>
            <p>You can explore the following pages:</p>
            <ul>
              <li>
                <Link to="/iphone">iPhone Page</Link>
              </li>
              <li>
                <Link to="/building">Building Page</Link>
              </li>
              {/* Add more links here as you add more routes */}
            </ul>
          </div>
        } />



        <Route path="/iphone" element={<IPhone />} />
        <Route path="/building" element={<Building />} /> {/* New route */}
        {/* You can add more routes for new pages here */}
      </Routes>
    </Router>
  );

}

export default App;
