import React from 'react';
import '../styles/Navbar.css';
import Dropdown from 'react-bootstrap/Dropdown';

function Navbar() {
    const styles = {
        background: '#6D6161'
    }
  return (
    <nav className= 'navbar' style= {styles}>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Menu
      </Dropdown.Toggle>

      <Dropdown.Menu id='menu-items'>
        <Dropdown.Item href="./">Homepage</Dropdown.Item>
        <Dropdown.Item href="#/action-2">High Scores</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Profile</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>

    <button class="logBtn" id='login'>Login</button>
    <button class="logBtn" id='logout'>Logout</button>
    </nav>
  );
}

export default Navbar;