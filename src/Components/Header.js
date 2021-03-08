import React from 'react';
import '../App.css';
import deviceicon from '../deviceicon.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
      <header className="container">
        <nav class="navbar navbar-light border-bottom ">
          <img className="deviceicon" src={deviceicon} alt="Logo" />
          <ul >
            <li ><Link className="text-white"  to="/">Home</Link></li>
            <li> <Link className="text-white" to='/Projects'>Projects</Link> </li>
            <li><Link className="text-white" to='/Contact'>Contact</Link> </li>
            <li><Link className="text-white" to='/Login'>Admin Panel</Link> </li>
          </ul>
        </nav>
      </header>
  );
}

export default Header;
