import React from "react";

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			taskItem:"",
		}
	
	}
	handleChanges = e => {
		this.setState({ [e.target.name]: e.target.value });
		
	};

	submitItem = e => {
	
	
		e.preventDefault();
		this.props.addItem(this.props.taskItem);
	 
		
	};

	render() {
		
		const { submitItem } = this;
		return (
			<form onSubmit={submitItem}>
				<input
					type='text'
					name="taskItem"
					placeholder='add task =)'
					onChange={this.props.handleChanges}
					value={this.props.taskItem}
				/>
			
				<button>Add</button>
			</form>
		);
	}
}
export default TodoForm;
