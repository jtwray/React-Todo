import React from "react";

export default class TodoForm extends React.Component{
	constructor(props){
		super(props);
		this.state={

		}

	}

	


	 submitItem=e => {
		e.preventDefault();
		this.props.addItem( this.state.taskItem );
		this.setState( {
			taskItem: ""
		}, () => {
			window.localStorage.setItem( 'savedList', JSON.stringify( this.state.lists ) );
		} );
	};

render(){
	return (
		<form onSubmit={this.submitItem}>

			<input
				name="taskItem"
				type='text'
				placeholder='add task =)'
				value={this.state.taskItem}
				onChange={this.props.handleChange}
			/>
		
			<button>Add</button>
		</form>
	);
	
}
}
