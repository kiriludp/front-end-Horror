import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/API";


export default function AuthForm(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // email is an example of signup only field, not in use for this app
  const [email ,setEmail] = useState("");

  useEffect(() => {
    if (props.userId > 0) {
      navigate(`/profile/${props.username}`);
    }
  }, [props.userId]);
  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
      // email is an example of signup only field, not in use for this app
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.usage === "Login") {
      API.login({
        username: username,
        password: password,
      })
        .then((data) => {
          console.log(data);
          props.setUserId(data.user.id);
          props.setUsername(data.user.username);
          props.setToken(data.token);
          localStorage.setItem("token", data.token);
          // document.querySelector(".logBtn").style="display: none;"
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("token");
        });
    } else {
      API.signup({
        email:email,
        username: username,
        password: password,
      })
        .then((data) => {
          console.log(data);
          props.setUserId(data.user.id);
          props.setEmail(data.user.email);
          props.setUsername(data.user.username);
          props.setToken(data.token);
          localStorage.setItem("token", data.token);
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("token");
        });
    }
  };
  return (
    <main className="AuthForm">
      {props.userId === -1 ? (
        <h1>Loading....</h1>
      ) : (
        <div>
          <h1>{props.usage}</h1>
          <form onSubmit={handleSubmit}>
          {props.usage==="Signup"&&
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
            {/* if i need additional form fields for signup: */}
            {/* // email is an example of signup only field, not in use for this app */}
            {/* {props.usage==="Signup"&& <input name="email" onChange={handleChange} placeholder="email" value={email}/>} */}
            {/* {props.usage==="Signup"?<input placeholder='signup only'/> :null} */}
            <button>{props.usage}</button>
          </form>
        </div>
      )}
    </main>
  );
}