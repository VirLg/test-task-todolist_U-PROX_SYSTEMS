import React from 'react';

const TodoItem = ({ el, removeTodo }) => {
  const { id, name, textCase } = el;

  return (
    <div
      style={{
        display: 'flex',
        height: '30px',
        alignSelf: 'baseLine',
      }}
    >
      <p>{name}</p>
      <p>{textCase}</p>
      <button type="button" onClick={() => removeTodo(id)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
