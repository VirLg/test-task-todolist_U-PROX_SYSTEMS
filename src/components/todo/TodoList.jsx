import React from 'react';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { allSelectors } from 'redux/selectors';
import { remove, togle } from 'redux/slice';

const TodoList = () => {
  const allTodo = useSelector(allSelectors);
  const dispath = useDispatch();

  return allTodo.map(el => (
    <div key={el.id}>
      <TodoItem
        el={el}
        removeTodo={() => dispath(remove(el.id))}
        update={() => dispath(togle(el.id))}
      />
    </div>
  ));
};

export default TodoList;
