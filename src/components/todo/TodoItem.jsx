import React from 'react';

const TodoItem = ({ el }) => {
  const { id, name, textCase } = el;

  return (
    <>
      <p>{name}</p>
      <p>{textCase}</p>
      <button onClick={() => id}>Delete</button>
    </>
  );
};

export default TodoItem;
