import React from "react";
import TodoItem from "./TodoItem";

const TodoList = props => {
  console.log(props, "todolist")
  return (
    <div>
      {props.taskslistarray.map(itemObj => (
     
        <TodoItem key={itemObj.id} itemObj={itemObj} toggleItemObj={props.toggleItemObj}/>
      ))}
    </div>
  );
}; 


export default TodoList;