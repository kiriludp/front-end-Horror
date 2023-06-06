import React from 'react'
/* import { useNavigate } from "react-router-dom";
import API from "../utils/API"; */
/* import "./style.css"; */

export default function AuthForm() {
  return(
    <form>
      <label>
        <p>Username:</p>
        <imput type="text" />
        </label>
        
        <label>
          <p>Password:</p>
          <input type="password" />
        </label>
        <div className="subbtn">
          <button type= 'submit'>Submit
          </button>
          
        </div>
    </form>
  )
}