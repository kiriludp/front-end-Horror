//for local development
// const URL_PREFIX = "http://localhost:3001";
//deployed
const URL_PREFIX = "http://localhost:3001";

const API = {
  login: (userObj) => {
    return fetch(`${URL_PREFIX}/login`, {
      method: "POST",
      body: JSON.stringify(userObj),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("falied login");
      }
    });
  },
  signup: (userObj) => {
    return fetch(`${URL_PREFIX}/Signup`, {
      method: "POST",
      body: JSON.stringify(userObj),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("falied signup");
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
  getUserByName:(username)=>{
    return fetch(`${URL_PREFIX}/api/users/byname/${username}`).then(res=>{
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("falied to fetch user " + username);
      }
    })
  }

};
 export default API