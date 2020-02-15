import React from 'react';
import AnswerItem from './../AnswerItem/AnswerItem';
import './AnswerList.css';

function AnswerList({answerList, onClick}) {
  let answers = answerList.map((item) => {
    return <AnswerItem
      id={item.id}
      name={item.name}
      status={item.status}
      key={"answer_" + item.id}
      onClick={onClick}
    />
  });

  return (
    <div className="Game_block Answer_block">
      {answers}
    </div>
  );
}

export default AnswerList;
