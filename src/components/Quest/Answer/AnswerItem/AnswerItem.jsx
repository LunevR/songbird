import React from 'react';
import './AnswerItem.css';

function AnswerItem({id, name, status, onClick}) {
  return (
    <div className="Answer_item" onClick={onClick.bind(this, id)}>
      <div className="Answer_item__name">
        <span className={"Answer_item__status status_" + status}></span>
        {name}
      </div>
    </div>
  );
}

export default AnswerItem;
