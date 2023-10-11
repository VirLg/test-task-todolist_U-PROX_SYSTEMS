import { nanoid } from '@reduxjs/toolkit';
import Form from './Form/Form';
import { useDispatch } from 'react-redux';
import { add } from 'redux/slice';
import TodoList from './todo/TodoList';
import Modal from './modal/Modal';

export const App = () => {
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

  return (
    <div>
      <Modal>{<Form addTask={addTask} />}</Modal>
      <TodoList />
    </div>
  );
};
//
