import React from "react"

const TodoItem = ({ toggleItemObj, itemObj }) => {
  

  return (
    <div
     className={
       `${ itemObj.completed ? " completed" : ''}`
      }
      onClick={() => toggleItemObj(itemObj.id)}
      >
      <p>{itemObj.task}</p>
    </div>
  );
};
export default TodoItem;
