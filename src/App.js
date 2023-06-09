import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import GameStart from './pages/GameStart';
import GamePlay from './pages/GamePlay';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile'
import AuthForm from './pages/AuthForm';
import API from './utils/API';



function App() {

  const [userId, setUserId] = useState(-1);
  const [username, setUsername] = useState("")
  const [token, setToken] = useState(" ")

useEffect (() => {
  const storedToken = localStorage.getItem("token");
  API.verifyToken(storedToken).then(data=>{
    setToken(storedToken);
    setUserId(data.id);
    setUsername(data.username);
  }).catch(err =>{
    console.log("this homie is not working")
    console.log(err)
    logout();

  })
}, [])

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
          <Route path="/" element={<Homepage />} />
          <Route path="/start" element={<GameStart />} />
          <Route path="/game" element={<GamePlay />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<AuthForm usage="Login" setUserId={setUserId} setUsername={setUsername} setToken={setToken} userId={userId} username={username} /> } />
          <Route path="/signup" element={<AuthForm usage="Signup" setUserId={setUserId} setUsername={setUsername} setToken={setToken} userId={userId} username={username} /> } />
          

        </Routes>
      </Router>
      
    </div>
  )
  }

export default App;