import React, { useState } from 'react';

const Form = ({ addTask, updateTask }) => {
  const [name, setName] = useState('');
  const [textCase, setTextCase] = useState('');

  const handleSbmit = e => {
    e.preventDefault();
    addTask({ name, textCase });
    setName('');
    setTextCase('');
  };
  const handleChange = e => {
    e.target.name === 'name'
      ? setName(e.target.value)
      : setTextCase(e.target.value);
  };
  const handleUpdate = e => {
    console.log('first', e.target.value);
    e.target.name === 'name'
      ? setName(e.target.value)
      : setTextCase(e.target.value);
    updateTask({ name, textCase });
    setName('');
    setTextCase('');
  };
  return (
    <>
      <form onSubmit={handleSbmit}>
        <input onChange={handleChange} name="name" value={name} />
        <input onChange={handleChange} name="textCase" value={textCase} />

        <button>Add Task</button>
        <button onClick={handleUpdate}>Update Task</button>
      </form>
    </>
  );
};

export default Form;
