import React from "react";

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			taskItem: ""
		};
	}
	handleChanges = e => {
		this.setState({ taskItem: e.target.value });
	};

	submitItem=e => {
		const {taskItem}=this.state;
		const {addItem}=this.props;
		e.preventDefault();
		addItem(taskItem);
		this.setState({ taskItem: "" });
	};

	render() {
		const {taskItem}=this.state;
		const {handleChanges,submitItem}=this;
		return (
			<form onSubmit={submitItem}>
				<input
					type='text'
					placeholder='add task =)'
					value={taskItem}
					onChange={handleChanges}
				/>
				<button>Add</button>
			</form>
		);
	}
}
export default TodoForm;
