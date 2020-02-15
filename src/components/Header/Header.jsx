import React from 'react';
import MenuRow from './../Menu/MenuRow/MenuRow';
import logo from './../../images/logo/logo-songbird.svg';
import './Header.css';

function Header({
  score,
  step
}) {
  return (
    <header>
      <img src={logo} alt="logo" height="30" />
      <span id="score"> Score: {score}</span>
      <MenuRow step={step}/>
    </header>
  );
}

export default Header;
