import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import IPhone from './pages/Iphone/Iphone';
import Building from './pages/Building/Building';
import CustomForm from './pages/Forms/CustomForms';


function App() {
  return (
    <Router basename="/react-genesis">
      <Routes>
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
              <li>
                <Link to="/form">Form Page</Link>
              </li>
            </ul>
          </div>
        } />


        <Route path="/iphone" element={<IPhone />} />
        <Route path="/building" element={<Building />} /> 
        <Route path="/form" element={<CustomForm />} /> 
      </Routes>
    </Router>
  );

}

export default App;
