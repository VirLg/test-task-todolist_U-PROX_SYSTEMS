import React from 'react';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { allSelectors, modalSelector } from 'redux/selectors';
import { amend, modalShow, remove, togle } from 'redux/slice';

const TodoList = () => {
  const show = useSelector(modalSelector);
  const allTodo = useSelector(allSelectors);

  const dispath = useDispatch();
  const updateTodo = idx => {
    dispath(modalShow(true));
    console.log('idx', idx);
  };
  return allTodo.map((el, idx) => (
    <div key={el.id}>
      <TodoItem
        el={el}
        idx={idx}
        removeTodo={() => dispath(remove(el.id))}
        checked={() => dispath(togle(el.id))}
        updateTodo={() => updateTodo(idx)}
      />
    </div>
  ));
};

export default TodoList;
// update={() => dispath(amend(idx))}
