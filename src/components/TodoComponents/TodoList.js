import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({taskslistarray,toggleItemObj,itemObj}) => {
  console.log(taskslistarray, "todolist")
  return (
    <div>
      {taskslistarray.map(itemObj => (
     
        <TodoItem key={itemObj.id}
                  itemObj={itemObj} 
                  toggleItemObj={toggleItemObj}
                  />)
      )}
    </div>
  );
};    

export default TodoList;