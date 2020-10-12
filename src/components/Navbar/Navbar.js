import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import burgerMenu from '../../assets/images/iconmonstr-menu-thin-240.png';

export default function Navbar (props) {
  const classes = {
  }
  
  return (
    <nav className="inline-block w-full h-10 p-8">
      <Link className="float-left text-2xl font-bold" to="/my-accounts">
          Uch
      </Link>
      <div>
        <img className="float-right h-8" src={burgerMenu}/>
      </div>
    </nav>
  )
};
