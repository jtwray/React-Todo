import React from "react"

const TodoItem = props => {
    console.log(props)
{/* onClick={props.toggle.....passes the props back up, on load.. 
essentially your calling the function right here... 
wrap it in another function instance like shown to wait & happen onClick. */}
  return (
    <div                className={
        `itemObj${props.itemObj.completed ?" completed" : ''}`}
         onClick={()=>props.toggleItemObj(props.itemObj.id)}>
      <p>{props.itemObj.task}</p>
    </div>
  );
};
export default TodoItem;
