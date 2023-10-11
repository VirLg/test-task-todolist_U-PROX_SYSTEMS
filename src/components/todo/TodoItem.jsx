import React from 'react';

const TodoItem = ({ el, removeTodo, update }) => {
  const { id, name, textCase, complited } = el;
  console.log('complited', complited);
  return (
    <div
      style={{
        display: 'flex',
        height: '30px',
        alignSelf: 'baseLine',
        outline: '1px solid red',
      }}
    >
      <p>{name}</p>
      <p>{textCase}</p>
      <input type="checkbox" onChange={() => update(id)} checked={complited} />
      <button type="button" onClick={() => removeTodo(id)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
