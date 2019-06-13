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

	submitItem = e => {
		e.preventDefault();
		this.props.addItem(this.state.taskItem);
		this.setState({ taskItem: "" });
	};

	render() {
		return (
			<form onSubmit={this.submitItem}>
				<input
					type='text'
					placeholder='add task =)'
					value={this.state.taskItem}
					onChange={this.handleChanges}
				/>
				<button>Add</button>
			</form>
		);
	}
}
export default TodoForm;
