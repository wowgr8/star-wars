import React from 'react';
import logo from '../assets/img/Star_Wars_Logo.png';

function Header() {
  return (
    <nav className="border-gray-200 sm:px-4 rounded bg-gray-900 mb-32">
      <div className="logo">
        <img className="h-20" src={logo} />
      </div>
    </nav>
  )
}

export default Header