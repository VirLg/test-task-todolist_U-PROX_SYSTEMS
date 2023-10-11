import { nanoid } from '@reduxjs/toolkit';
import Form from './Form/Form';
import { useDispatch, useSelector } from 'react-redux';
import { add, amend } from 'redux/slice';
import TodoList from './todo/TodoList';
import Modal from './modal/Modal';
import { modalSelector } from 'redux/selectors';
import { modalShow } from 'redux/slice';
import { useState } from 'react';

export const App = () => {
  const show = useSelector(modalSelector);
  const [idx, setIdx] = useState(null);
  const dispath = useDispatch();

  const addTask = ({ name, textCase }) => {
    const todo = {
      id: nanoid(),
      name,
      textCase,
      complited: false,
    };
    dispath(add(todo));
    return todo;
  };
  const activIndex = idx => {
    setIdx(idx);
  };
  const updateTask = ({ name, textCase }) => {
    dispath(amend({ name, textCase, idx }));
  };

  return (
    <div>
      {show && (
        <Modal>
          <Form addTask={addTask} updateTask={updateTask} />
        </Modal>
      )}
      <TodoList activIndex={activIndex} />
      <button onClick={() => dispath(modalShow(true))}>Create ToDo</button>
    </div>
  );
};
//
