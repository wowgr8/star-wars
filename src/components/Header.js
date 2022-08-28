import React from 'react';
import logo from '../assets/img/Star_Wars_Logo.png';

function Header() {
  return (
    <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-gray-900">
      <div className="logo">
        <img src={logo} />
      </div>
    </nav>
  )
}

export default Header