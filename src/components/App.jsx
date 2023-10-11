import { nanoid } from '@reduxjs/toolkit';
import Form from './Form/Form';
import { useDispatch } from 'react-redux';
import { add } from 'redux/slice';

export const App = () => {
  const dispath = useDispatch();
  const addTask = ({ name, textCase }) => {
    const todo = {
      id: nanoid(),
      name,
      textCase,
    };
    dispath(add(todo));
    return todo;
  };
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Form addTask={addTask} />
    </div>
  );
};
