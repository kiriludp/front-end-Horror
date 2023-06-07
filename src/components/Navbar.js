import React from "react";
import "../styles/Navbar.css";
import 'bootstrap/dist/css/bootstrap.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';


export default function Navbar(props) {

  return (
    <nav className='Navbar'>
      <div className="navigating">
        <Dropdown>
            <Dropdown.Toggle className="Menu">
              Menu
            </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item><Link to="/">Homepage</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/Start">Start Game</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/Profile">Profile</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

    <div className="button">
      <button className="logBtn"><Link to="/Login">Login</Link></button>
      <button className="signBtn" onClick={props.logout}>Logout</button>:null}
      <button className="signBtn"><Link to ="/Signup">SignUp</Link></button>
      </div>
        </div>
</nav>
  );
}
