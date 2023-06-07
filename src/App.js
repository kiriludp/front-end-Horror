import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
/* import "./styles/App.css"; */
import Header from './components/Header';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Profile from './components/Profile';
import AuthForm from './components/AuthForm';
import Start from './components/Start';
/* import API from "./utils/API" */

export default function App() {
 
  
  return (
    <div className='Main'>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Start" element={<Start />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Login" element={<AuthForm type="Login" />} />
          <Route path="/Signup" element={<AuthForm type="Signup" />} />
         

        </Routes>
      </Router>
    </div>
  )
  }
