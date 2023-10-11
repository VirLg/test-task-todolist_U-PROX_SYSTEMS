import React from 'react';

const Modal = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: 'grey',
        boxSizing: 'conten-box',
        width: '1000px',
        height: '1200px',
        zIndex: '1',
      }}
    >
      <div
        style={{
          backgroundColor: 'blue',
          boxSizing: 'conten-box',
          width: '450px',
          height: '100px',
          zIndex: '2',
          padding: '30px',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
