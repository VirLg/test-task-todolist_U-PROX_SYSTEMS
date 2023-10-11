import { nanoid } from '@reduxjs/toolkit';
import Form from './Form/Form';
import { useDispatch, useSelector } from 'react-redux';
import { add } from 'redux/slice';
import TodoList from './todo/TodoList';
import Modal from './modal/Modal';
import { modalSelector } from 'redux/selectors';
import { modalShow } from 'redux/slice';
export const App = () => {
  const show = useSelector(modalSelector);

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
  const updateTask = ({ name, textCase }) => {};

  return (
    <div>
      {show && (
        <Modal>
          <Form addTask={addTask} updateTask={updateTask} />
        </Modal>
      )}
      <TodoList />
      <button onClick={() => dispath(modalShow(true))}>Create ToDo</button>
    </div>
  );
};
//
