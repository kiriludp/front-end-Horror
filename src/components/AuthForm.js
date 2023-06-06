import React, {useState} from 'react'
/* import { useNavigate } from "react-router-dom"; */
import API from "../utils/API";
/* import "./style.css"; */

export default function AuthForm(props) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

 /*  useEffect(() => {
    if (props.userId > 0) {
      (`/homepage`);
    }
  }, [props.userId]); */
  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.type === "Login") {
      API.login({
        username: username,
        password: password,
      })
      .then((data) => {
        console.log(data);
        console.log("testing");
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
        email:email,
        username:username,
        password:password,
      })
      .then((data) => {
        console.log(data);
        console.log("testing");
        props.setUserId(data.user.id);
        props.setEmail(data.email);
        props.setUsername(data.user.username);
        props.setToken(data.token);
        localStorage.setItem("token", data.token);
      })
      .catch((err)=> {
        console.log(err);
        localStorage.removeItem("token");
      });
  }
};
  return(
    <main className="AuthForm">
      <div>
        <h1>{props.type}</h1>
        <form onSubmit={handleSubmit}>
        {props.type==="Signup"&&
          <input
          name="email"
          onChange={handleChange}
          value={email}
          placeholder="email"
          />}
          <input
          name="username"
          onChange={handleChange}
          value={username}
          placeholder="username"
          />
          <input
          name="password"
          onChange={handleChange}
          value={password}
          type="password"
          />
        
        <button>{props.type}</button>
        </form>
      </div>
    </main>
  );
}