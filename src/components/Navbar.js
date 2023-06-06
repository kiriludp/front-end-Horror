import React from "react";
import "../styles/Navbar.css";
import 'bootstrap/dist/css/bootstrap.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';


export default function Navbar() {

    const style ={
      display: 'block',
      width: 700,
      padding: 30
    }

  return (
    <nav className='Navbar' style= {style}>
      <div className="navigating">
        <Dropdown>
            <Dropdown.Toggle>
              Menu
            </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item><Link to="/">Homepage</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/NewGame">New Game</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/Profile">Profile</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      <button>Login</button>
      <button>Logout</button>
        </div>
</nav>
  );
}
