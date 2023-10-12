import React from 'react';
import { TodoDiv, Button } from './TodoItem.styled';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { activIdxSelector, allSelectors } from 'redux/selectors';

const TodoItem = ({ el, idx, removeTodo, checked, updateTodo }) => {
  const { id, name, textCase, complited } = el;
  const activIdx = useSelector(activIdxSelector);
  const allTodo = useSelector(allSelectors);
  // const makeClassNamesActiv = () => {
  //   classNames('todo', {
  //     todoDivActiv: allTodo[activIdx],
  //   });
  // };
  return (
    <TodoDiv className="todo" onClick={() => updateTodo(idx)}>
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
