import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
/* import "./styles/App.css"; */
import Header from './components/Header';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Profile from './components/Profile';
import Login from './components/AuthForm';
import NewGame from './components/NewGame';
import API from "./utils/API"

export default function App() {
  const [userId, setUserId] = useState(-1);
  const [username, setUsername] =useState("")
  const [token, setToken] = useState("")

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    API.verifyToken(storedToken).then(data=> {
      setToken(storedToken);
      setUserId(data.id);
      setUsername(data.username);
    }).catch(err => {
      console.log("WRONG TURN")
      console.log(err)
      logout();
    })
  }, [])

  const logout= () => {
    localStorage.removeItem("token")
    setToken(null);
      setUserId(0);
      setUsername(null);
  }
  
  return (
    <div className='Main'>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/NewGame" element={<NewGame />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Login" element={<Login type="Login" />} />
         

        </Routes>
      </Router>
    </div>
  )
  }
