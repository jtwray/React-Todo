import React from "react";
import TodoItem from "./TodoItem";

const TodoList = props => {
	
	if (!props.taskslistarray) { // evaluates to true if currentVideo is null
		return <div>Loading...</div>; 
	  }
	  return (
		<div>
		{props.taskslistarray.map(itemObj => (
			<TodoItem
				key={itemObj.id}
				itemObj={itemObj}
				toggleItemObj={props.toggleItemObj}
			/>
		))}
		</div>
	);
};

export default TodoList;

