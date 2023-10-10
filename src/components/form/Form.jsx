import React, { useState } from 'react'

const Form = () => {
    const [todo, setTodo] = useState('');
  return (
      <Form onSubmit={ handleSbmit}>
           <div><input
          onChange
          name='todo'
          value={}
      /></div>
     </Form>
  )
}

export default Form