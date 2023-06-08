import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./styles/App.css";
import Header from './components/Header';
import Navbar from './components/Navbar';
import AuthForm from './components/AuthForm';
import Homepage from './components/Homepage';
import Start from './components/Start';
import Profile from './components/Profile';
import API from "./utils/API"

export default function App() {
  const [userId, setUserId] = useState(-1);
  const [username, setUsername] = useState("")
  const [token, setToken] = useState("")

  useEffect(()=>{
    const storedToken = localStorage.getItem("token");
    API.verifyToken(storedToken).then(data=>{
      setToken(storedToken);
      setUserId(data.id);
      setUsername(data.username);
    }).catch(err=>{
      console.log("oh noes")
      console.log(err)
     logout();
    })
  },[])


  const logout = ()=>{
    localStorage.removeItem("token")
      setToken(null);
      setUsername(null);
      setUserId(0);
  }

  return (
    <Router>
    <Header />
    <Navbar userId={userId} username={username} logout={logout}/>
      <Routes>
        <Route path="/" element={<Homepage userId={userId} token={token}/>} />
        <Route path="/login" element={<AuthForm usage="Login" setUserId={setUserId} setUsername={setUsername} setToken={setToken} userId={userId} username={username}/>} />
        <Route path="/signup" element={<AuthForm usage="Signup" setUserId={setUserId} setUsername={setUsername} setToken={setToken} userId={userId} username={username}/>} />
        <Route path="/start" element={<Start />} />
        <Route path="/user/:username" element={<Profile userId={userId} token={token}/>} />
        <Route path="/*" element={<h2>Page not found</h2>} />

      </Routes>
      <hr />
    </Router>
  );
}