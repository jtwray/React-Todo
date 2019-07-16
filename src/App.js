import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./index.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            taskslistarray: []
        };
	}
	
    toggleItemObj = id => {
		const { taskslistarray } = this.state;
        this.setState({
            taskslistarray: taskslistarray.map(itemObj => {
                if (itemObj.id === id) {
                    return {
                        ...itemObj,
                        completed: !itemObj.completed
                    };
                }
                return itemObj;
            })
        });
    };
	
    addItem = item => {
        const { taskslistarray } = this.state;
		const newItem = {
			task: item,
            id: Date.now(),
            completed: false
        };
		
		//const copiedTasks = taskslistarray.slice();
        //copiedTasks.push(newItem);
		 const copiedTasks= [...taskslistarray, newItem]
        console.log(copiedTasks);
        this.setState({ taskslistarray: copiedTasks });
    };
    //use filter
    //  loop over item of this.state.groceries
    // filter out any tasks who task.completed === true
    // setState with new filtered list
					clearCompleted = () => {
						const copiedTasks = this.state.taskslistarray.slice();
						const completedTasks = copiedTasks.filter(item => !item.completed === true);
						this.setState({ taskslistarray: completedTasks });
    };
    
    render() {
        const { toggleItemObj, addItem, clearCompleted } = this;
        const { taskslistarray } = this.state;
        return (
            <div className='App'>
                <div className='header'>
                    <h1> ToDoList</h1>
                    <TodoForm addItem={addItem} />
                </div>
                <TodoList
                    taskslistarray={taskslistarray}
                    toggleItemObj={toggleItemObj}
                />
                <button onClick={clearCompleted}>ClearCompleted</button>
            </div>
        );
    }
}
export default App;
