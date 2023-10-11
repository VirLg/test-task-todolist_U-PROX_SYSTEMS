import React, { useState } from 'react';

const Form = ({ addTask }) => {
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
  return (
    <form onSubmit={handleSbmit}>
      <input onChange={handleChange} name="name" value={name} />
      <input onChange={handleChange} name="textCase" value={textCase} />

      <button>Add Task</button>
    </form>
  );
};

export default Form;
