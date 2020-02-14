import React from 'react';
import MenuItem from './../MenuItem/MenuItem';
import './MenuRow.css';

function MenuRow({step}) {
  const menuItems = [
    'Разминка',
    'Воробьиные',
    'Лесные птицы',
    'Певчие птицы',
    'Хищные птицы',
    'Морские птицы',
  ];

  const menuList = menuItems.map((item, key) => {
    const isCurrent = step === key + 1 ? true : false;

    return <MenuItem
      name={item}
      key={item.toString()}
      isCurrent={isCurrent}
    />
  });

  return (
    <ul className="menu">{menuList}</ul>
  );
}

export default MenuRow;
