import React from "react";
import TodoItem from "./TodoItem";

const TodoList = props => {
	
	return (
		<div>
		{props.taskslistarray && props.taskslistarray.map(itemObj => (
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
