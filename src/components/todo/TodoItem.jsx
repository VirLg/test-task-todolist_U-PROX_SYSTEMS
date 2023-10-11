import React from 'react';
import { TodoDiv, Button, CheckBox } from './TodoItem.styled';
const TodoItem = ({ el, idx, removeTodo, checked, updateTodo }) => {
  const { id, name, textCase, complited } = el;

  return (
    <TodoDiv onClick={() => updateTodo(idx)}>
      <h4>name: {name}</h4>
      <h3
        style={{
          marginLeft: 'auto',
          marginRight: '150px',
          paddingTop: '0',
          marginTop: '6px',
        }}
      >
        task: {textCase}
      </h3>
      <input
        style={{
          marginRight: '18px',
        }}
        type="checkbox"
        onChange={() => checked(id)}
        checked={complited}
      />
      <Button type="button" onClick={() => removeTodo(id)}>
        Delete
      </Button>
    </TodoDiv>
  );
};

export default TodoItem;
