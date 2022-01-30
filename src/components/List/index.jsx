import React from 'react';
import classNames from 'classnames';
import './List.scss';
import Badge from './../Badge/index';

function List({ items, isRemoveble, onClick }) {
  return (
    <ul className="list" onClick={onClick}>
      {items.map((obj, index) => (
        <li key={index} className={classNames(obj.className, { active: obj.active })}>
          <i>{obj.icon ? obj.icon : <Badge color={obj.color} />}</i>
          <span>{obj.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default List;
