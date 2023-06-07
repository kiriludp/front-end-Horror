import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
/* import "./styles/App.css"; */
import Header from './components/Header';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Profile from './components/Profile';
import AuthForm from './components/AuthForm';
import Start from './components/Start';
import API from "./utils/API";


export default function App() {

  const [userId, setUserId] = useState(-1);
  const [email, setEmail] = useState("")
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
    <div className='Main'>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage userId={userId} token={token} />} />
          <Route path="/Login" element={<AuthForm usage="Login" setUserId={setUserId} setUsername={setUsername} setToken={setToken} userId={userId} username={username} />} />
          <Route path="/Signup" element={<AuthForm usage="Signup" setUserId={setUserId} setEmail={setEmail} setUsername={setUsername} setToken={setToken} userId={userId} email={email} username={username} />} />
          <Route path="/Start" element={<Start />} />
          <Route path="/Profile" element={<Profile />} />

        </Routes>
      </Router>
      
    </div>
  )
  }
