import React from "react";
import TodoItem from "./TodoItem";


class TodoList extends React.Component {
	constructor( props ) {
		super( props );
		this.state={
			filtered: [],
			
		}
	}

	componentDidMount() {

		this.setState( {filtered: this.props.taskslistarray} )
	};

	componentWillReceiveProps( nextProps ) {

		this.setState( {filtered: nextProps.taskslistarray} )
	}

	


	render() {
		const {props}=this;
		return (
			<div>

				<input
				
					type="text"
					placeholder="Search 🔍"
					onChange={e => props.handleChange( e )}
				/>

				{this.state.filtered&&this.state.filtered.map( itemObj => (
					<TodoItem
						key={itemObj.id}
						itemObj={itemObj}
						toggleItemObj={props.toggleItemObj}
					/>
				) )}
			</div>
		);
	};
}

export default TodoList;



// handleChange( e ) {


// 	e.target.value!==""
// 		?
// 		this.setState( {
// 			currentList: this.props.taskslistsarray,
// 			newList: this.state.currentList.filter( item => item.toLowerCase().includes( e.target.value.toLowerCase() ) )
// 		} )
// 		:
// 		this.setState( {newList: this.props.taskslistarray, filtered: this.state.newList} )

// }

// handleChange( e ) {
// 	// Variable to hold the original version of the list
// 	let currentList=[];
// 	// Variable to hold the filtered list before putting into state
// 	let newList=[];

// 	// If the search bar isn't empty
// 	if( e.target.value!=="" ) {
// 		// Assign the original list to currentList
// 		currentList=this.props.taskslistsarray;

// 		// Use .filter() to determine which taskslistsarray should be displayed
// 		// based on the search terms
// 		newList=currentList.filter( item => {
// 			// change current item to lowercase
// 			const lc=item.toLowerCase();
// 			// change search term to lowercase
// 			const filter=e.target.value.toLowerCase();
// 			// check to see if the current list item includes the search term
// 			// If it does, it will be added to newList. Using lowercase eliminates
// 			// issues with capitalization in search terms and search content
// 			return lc.includes( filter );
// 		} );
// 	} else {
// 		// If the search bar is empty, set newList to original task list
// 		newList=this.props.taskslistsarray;
// 	}
// 	// Set the filtered state based on what our rules added to newList
// 	this.setState( {
// 		filtered: newList
// 	} );
// }