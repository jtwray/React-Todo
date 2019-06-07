import React from "react";

const TodoItem = props => {
    console.log(props)
  return (
    <div onClick={()=>props.toggleItemObj(props.itemObj.id)}>
      <p>{props.itemObj.task}</p>
    </div>
  );
};
export default TodoItem;
