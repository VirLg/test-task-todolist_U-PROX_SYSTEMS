import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { allSelectors } from 'redux/selectors';

const TodoList = () => {
  const allTodo = useSelector(allSelectors);
  console.log('first', allTodo);

  return allTodo.map(el => (
    <div key={el.id}>
      <TodoItem el={el} />
    </div>
  ));
};

export default TodoList;
