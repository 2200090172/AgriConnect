// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'; // Adjust the path if necessary
import ImportanceofFarming from './Components/ImportanceofFarming';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="#importance-of-farming"element={<ImportanceofFarming/>}/>
        
      </Routes>
    </Router>
  );
};

export default App;
