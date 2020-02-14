import React from 'react';
import './MenuItem.css';

function MenuItem({name, isCurrent}) {
  if (isCurrent) {
    return <li className="menu__item current">
        {name}
    </li>
  } else {
    return (
      <li className="menu__item">
          {name}
      </li>
    );
  }
}

export default MenuItem;
