import React from 'react';
import MenuItem from './../MenuItem/MenuItem';
import './MenuRow.css';

function MenuRow() {
  const menuItems = [
    'Разминка',
    'Воробьиные',
    'Лесные птицы',
    'Певчие птицы',
    'Хищные птицы',
    'Морские птицы',
  ];

  const menuList = menuItems.map((item) =>
    <MenuItem
      name={item}
      key={item.toString()}
    />
  );

  return (
    <ul class="menu">{menuList}</ul>
  );
}

export default MenuRow;
