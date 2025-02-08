import React, { useState } from 'react';
import Nav from './components/Nav';
import MAIN from './components/MAIN';
import Features from './components/features/Features';
import Project from './components/project/Project';
import ButtonGroup from './components/resume/ButtonGroup';
import Contact from './components/contact';



const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Nav   />
      <MAIN />
      <Features />
      <Project />
      <Contact/>
      <ButtonGroup />
      
      
     
      
    </div>
  );
}

export default App;