import React from 'react';

const TodoItem = ({ el, idx, removeTodo, checked, update }) => {
  const { id, name, textCase, complited } = el;

  return (
    <div
      style={{
        display: 'flex',
        height: '30px',
        alignSelf: 'baseLine',
        outline: '1px solid red',
      }}
      onClick={() => update(idx)}
    >
      <p>{name}</p>
      <p>{textCase}</p>
      <input type="checkbox" onChange={() => checked(id)} checked={complited} />
      <button type="button" onClick={() => removeTodo(id)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
