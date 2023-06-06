//for local development
// const URL_PREFIX = "http://localhost:3001";
//deployed
import axios from 'axios';

const URL_PREFIX = "http://localhost:3001";

const API = {
  login: (userObj) => {
    return fetch (`${URL_PREFIX}/login`, {
      method: "POST",
      body: JSON.stringify(userObj),
      headers: {
        "Content-Type:": "application/json"
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Login Failed");
      }
    });
  },
  signup: (userObj) => {
    return fetch (`${URL_PREFIX}/signup`, {
      method: "POST",
      body: JSON.stringify(userObj),
      headers: (
          "Content-Type"
      )
    })
  }
  



        