import React from 'react';
import MenuRow from './../Menu/MenuRow/MenuRow';
import logo from './../../images/logo/logo-songbird.svg';
import './Header.css';

function Header({score}) {
  return (
    <header>
      <img src={logo} alt="logo" height="35" />
      <span id="score"> Score: {score}</span>
      <MenuRow />
    </header>
  );
}

export default Header;
