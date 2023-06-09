const URL_PREFIX = "https://horrorgame.herokuapp.com";

const API = {
  login: (userObj) => {
    return fetch(`${URL_PREFIX}/api/users/login`, {
      method: "POST",
      body: JSON.stringify(userObj),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("failed login");
      }
    });
  },
  signup: (userObj) => {
    return fetch(`${URL_PREFIX}/api/users/signup`, {
      method: "POST",
      body: JSON.stringify(userObj),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("failed signup");
      }
    });
  },
  verifyToken:(token)=>{
    return fetch(`${URL_PREFIX}/verifytoken`,{
        headers:{
            "authorization":`Bearer ${token}`
        }
    }).then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("falied signup");
        }
      });
  },
  
  };
  
export default API;
    