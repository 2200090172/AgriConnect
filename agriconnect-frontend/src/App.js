import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Adminsignin from './Components/signin/Adminsignin.jsx';
import Farmersignin from './Components/signin/Farmersignin.jsx';
import Publicsignin from './Components/signin/Publicsignin.jsx';
import Expertsignin from './Components/signin/Expertsignin.jsx';
import PublicLogin from './Components/Public/PublicLogin.jsx';
import About from './Components/Public/About.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminsignin" element={<Adminsignin />} />
        <Route path="/farmersignin" element={<Farmersignin />} />
        <Route path="/publicsignin" element={<Publicsignin />} />
        <Route path="/PublicLogin" element={<PublicLogin/>}/>
        <Route path="/expertsignin" element={<Expertsignin />} />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>

  );
};

export default App;