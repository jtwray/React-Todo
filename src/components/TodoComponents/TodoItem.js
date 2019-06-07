import React from "react";

const TodoItem = props => {
    console.log(props)
  return (
    <div>
      <p>{props.itemObj.task}</p>
    </div>
  );
};
export default TodoItem;
