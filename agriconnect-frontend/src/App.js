import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home.jsx';
import Adminsignin from './components/signin/Adminsignin.jsx';
import Farmersignin from './components/signin/Farmersignin.jsx';
import Publicsignin from './components/signin/Publicsignin.jsx';
import Expertsignin from './components/signin/Expertsignin.jsx';
import Adminhome from './components/admin/Adminhome.jsx';
import Addexpert from './components/admin/Addexpert.jsx';
import Addfarmer from './components/admin/Addfarmer.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminsignin" element={<Adminsignin />} />
        <Route path="/farmersignin" element={<Farmersignin />} />
        <Route path="/publicsignin" element={<Publicsignin />} />
        <Route path="/expertsignin" element={<Expertsignin />} />
         <Route path="/adminhome" element={<Adminhome />} />
        <Route path="/addexpert" element={<Addexpert />} /> 
        <Route path='/addfarmer' element={<Addfarmer />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
