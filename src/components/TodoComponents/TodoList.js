import React from "react";


const TodoList = props => {
  return (
    <div>
      {props.tasks.map(item => (
        <div key={item.id}>{item.task}</div>
      ))}
    </div>
  );
};


export default TodoList;