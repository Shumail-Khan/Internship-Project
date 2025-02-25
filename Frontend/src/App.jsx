import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Docter from './pages/Docter'; 
import Login from './pages/Login' 
import About from './pages/About';
import Contact from './pages/Contact';
import MyProfile from './pages/MyProfile';
import MyAppointment from './pages/MyAppointment';
import Appointment from './pages/Appointment';
import Nav from './components/Nav';
import Header from './components/Header';
import AppContextProviders, { AppContext } from './context/AppContextProviders';
import Footer from './components/Footer';




const App = () => {
  const data = useContext(AppContext)
  console.log(data) 
  return (
    <div className="mx-4 sm:mx-[10%]">
      
      <Nav/>
      
    
      {/* <MyProfile/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docter" element={<Docter/>} />
        <Route path="/docter/:speciality" element={<Docter/>} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/about" element = {<About/>} />
        <Route path="/contact" element = {<Contact/>}/>
        <Route path='/myProfile' element= {<MyProfile/>}/>
        <Route path='/myAppointment' eleemnt = {<MyAppointment/>}/>
        <Route path="/appointment/:docId" element={<Appointment/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;