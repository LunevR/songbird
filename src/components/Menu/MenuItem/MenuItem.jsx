import React from 'react';
import './MenuItem.css';

function MenuItem({name}) {
  return (
    <li className="menu__item">
        {name}
    </li>
  );
}

export default MenuItem;
