import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ taskslistarray, toggleItemObj, itemObj, searchResults }) => {
  console.log(taskslistarray, "todolist")
  return (
    <div>
      <ul>
        {taskslistarray.map(itemObj => (

          <TodoItem
            key={itemObj.id}
            itemObj={itemObj}
            toggleItemObj={toggleItemObj}
          />)
        )}
      </ul>
      <>
       
      </>
    </div>
  );
};

export default TodoList;