import { nanoid } from '@reduxjs/toolkit';
import Form from './Form/Form';
import { useDispatch, useSelector } from 'react-redux';
import { add, amend } from 'redux/slice';
import TodoList from './todo/TodoList';
import Modal from './modal/Modal';
import { activIdxSelector, allSelectors, modalSelector } from 'redux/selectors';
import { modalShow } from 'redux/slice';
import { useState } from 'react';

export const App = () => {
  const show = useSelector(modalSelector);
  const allTodo = useSelector(allSelectors);
  const activIdx = useSelector(activIdxSelector);

  const dispath = useDispatch();

  const addTask = ({ name, textCase }) => {
    if (name === '' || textCase === '') {
      alert('Input fields are empty');
      return;
    }
    if (activIdx === null) {
      const todo = {
        id: nanoid(),
        name,
        textCase,
        complited: false,
      };
      dispath(add(todo));
      return todo;
    } else {
      updateTask(name, textCase);
    }
  };

  const updateTask = (name, textCase) => {
    const newArr = allTodo.map((el, i) => {
      console.log('aa', el);
      if (i === activIdx) {
        return {
          ...el,
          name,
          textCase,
        };
      } else {
        return el;
      }
    });
    dispath(amend(newArr));
  };

  return (
    <div
      style={{
        padding: '8px',
      }}
    >
      {show && (
        <Modal>
          <Form addTask={addTask} updateTask={updateTask} />
        </Modal>
      )}
      <TodoList />
      <button
        disabled={show}
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'block',
        }}
        onClick={() => dispath(modalShow(true))}
      >
        Create ToDo
      </button>
    </div>
  );
};
//
