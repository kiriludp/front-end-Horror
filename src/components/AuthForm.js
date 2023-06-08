import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/API";
/* import "./style.css"; */

export default function AuthForm(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (props.userId > 0 ) {
      navigate(`/`);
    }
  }, [props.userId]);
  const handleChange = (e) => {
    if (e.target.name=== 'username') {
      setUsername(e.target.value);
    }else if (e.target.name ==="email") {
      setEmail(e.target.value);
    }else {
      setPassword(e.target.value);
    }
    };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.type ==="Login") {
      API.login({
        username:username,
        password:password,
      })
      .then((data) => {
        console.log(data);
        props.setUserId(data.user.id);
        props.setUsername(data.user.username);
        props.setToken(data.token);
        localStorage.setItem("token", data.token);
      })
      .catch((err)=> {
        console.log(err);
        localStorage.removeItem("token");
      });
    } else {
      API.signup({
        username:username,
        email:email,
        password:password,
      })
      .then((data) => {
        console.log(data);
        props.setUserId(data.user.id);
        props.setUsername(data.user.username);
        props.setEmail(data.email);
        props.setToken(data.token);
        localStorage.setItem("token", data.token);
        
      });
    }
  }
  return (
    <main className="AuthForm">
      {props.userId === -1 ? (
        <h1>We're getting there...</h1>
      ) : (
        <div className="body">
          <h1>{props.type}</h1>
          <form onSubmit={handleSubmit}>
          <input 
          name="username"
          onChange={handleChange} 
          value={username}
          placeholder='username' />
          <input 
          name="password"
          onChange={handleChange} 
          value={password}
          placeholder='password' />
          {props.type ==="Sign Up"&&
            <input
            name="email"
            onChange={handleChange}
            value={email}
            placeholder='email' />
            }
            <button>{props.type}</button>
            </form>
      </div>
      )}
    </main>
  );
}
 