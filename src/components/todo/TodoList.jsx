import React from 'react';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { allSelectors } from 'redux/selectors';
import { amend, remove, togle } from 'redux/slice';

const TodoList = () => {
  const allTodo = useSelector(allSelectors);
  const dispath = useDispatch();

  return allTodo.map((el, idx) => (
    <div key={el.id}>
      <TodoItem
        el={el}
        idx={idx}
        removeTodo={() => dispath(remove(el.id))}
        checked={() => dispath(togle(el.id))}
        update={() => dispath(amend(idx))}
      />
    </div>
  ));
};

export default TodoList;
