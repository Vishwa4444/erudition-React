import React from 'react';
import {Todo} from '../MyComponents/Todo';
const Todos = (props) => {
  return (
    <div className='container'> 
     <h3>Todos List</h3>
     <todo todo ={props.todo[0]}/>

    </div>
  );
}

export default Todos;
