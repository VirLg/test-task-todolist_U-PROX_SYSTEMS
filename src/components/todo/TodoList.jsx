import React from 'react';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { allSelectors } from 'redux/selectors';
import { remove } from 'redux/slice';

const TodoList = () => {
  const allTodo = useSelector(allSelectors);
  const dispath = useDispatch();
  const removeTodo = id => {
    console.log('id', id);
    const newArr = allTodo.filter(el => el.id !== id);
    dispath(remove(newArr));
    console.log('newArr', newArr);
  };
  return allTodo.map(el => (
    <div key={el.id}>
      <TodoItem el={el} removeTodo={removeTodo} />
    </div>
  ));
};

export default TodoList;
