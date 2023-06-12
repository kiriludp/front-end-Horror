import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/Navbar.css";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';


export default function Navbar() {

  return (
    <nav className='Navbar'>
      <div className="navigating">
        <Dropdown>
            <Dropdown.Toggle className="Menu">
              Menu
            </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item><Link to="/">Homepage</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/start">Start Game</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/profile">Profile</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

    <div className="button">
      <button className="logBtn"> <Link to="/login">Login</Link></button>
      <button className="outBtn"><Link to ="/">Logout</Link></button>
      <button className="signBtn"><Link to ="/signup">SignUp</Link></button>
      </div>
        </div>
</nav>
  );
}