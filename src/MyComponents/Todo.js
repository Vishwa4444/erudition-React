import React from 'react';

const Todo = ({todo}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
    </div>
  );
}

export default Todo;
