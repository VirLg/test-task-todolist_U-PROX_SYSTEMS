import React from 'react';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { activIdxSelector, allSelectors } from 'redux/selectors';
import { activ, modalShow, remove, togle } from 'redux/slice';

const TodoList = ({ activIndex }) => {
  const allTodo = useSelector(allSelectors);
  const activIdx = useSelector(activIdxSelector);
  const dispath = useDispatch();
  const updateTodo = idx => {
    dispath(modalShow(true));
  };
  console.log('updateTodo', updateTodo);
  return allTodo.map((el, idx) => (
    <div
      key={el.id}
      className="todo"
      style={{
        outline: idx === activIdx ? '4px solid blue' : 'none',
        width: '800px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <TodoItem
        el={el}
        idx={idx}
        removeTodo={() => dispath(remove(el.id))}
        checked={() => dispath(togle(el.id))}
        updateTodo={() => dispath(activ(idx))}
      />
    </div>
  ));
};

export default TodoList;
// update={() => dispath(amend(idx))}
