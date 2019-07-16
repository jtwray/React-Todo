import React from "react"

const TodoItem = ({toggleItemObj,itemObj}) => {
    console.log(itemObj,toggleItemObj)

  return (
    <div                className={
        `itemObj${itemObj.completed ?" completed" : ''}`}
         onClick={()=>toggleItemObj(itemObj.id)}>
      <p>{itemObj.task}</p>
    </div>
  );
};
export default TodoItem;
