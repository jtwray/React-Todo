import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import { TodoSearch } from "./components/TodoComponents/TodoSearch";
import "./index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      taskslistarray: [{ task: "", completed: false, id: "" }],
      taskItem: "",
      searchTerm: "",
      searchResults:"",
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

  searchTodos = searchTerm => {
    const tasklistcopy = [...this.state.taskslistarray];

    const tlcFilter = tasklistcopy.filter(taskObj => {
      return taskObj.task
        .toLowerCase()
        .trim()
        .includes(this.state.searchTerm.toLowerCase().trim());
    });

    this.setState({
      searchResults: tlcFilter
    });
  };

  addItem = item => {
  
    const nextItem = {
      task: item,
      id: Date.now(),
      completed: false
    };
   
    const copiedTasks = [...this.state.taskslistarray, nextItem];

    this.setState({
      taskslistarray: copiedTasks
   ,
      taskItem: ""
    });
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  clearCompleted = () => {
    const copiedTasks = this.state.taskslistarray.slice();
    const completedTasks = copiedTasks.filter(item => !item.completed);
    this.setState({ taskslistarray: completedTasks });
  };

  render() {
    const { toggleItemObj, addItem, clearCompleted, searchResults } = this;
    const { taskslistarray } = this.state;

    return (
      <div className="App">
        <div className="header">
          <h1> ToDoList</h1>

          <TodoForm
            addItem={addItem}
            filterSearch={this.filterSearch}
            handleChanges={this.handleChanges}
            reset={this.reset}
            taskItem={this.state.taskItem}
          />
        </div>

        <TodoList
          taskslistarray={taskslistarray}
          toggleItemObj={toggleItemObj}
          searchResults={searchResults}
          handleChanges={this.handleChanges}
        />
        <button onClick={clearCompleted}>ClearCompleted</button>

        <TodoSearch
          searchResults={this.state.searchResults}
          searchTodos={this.searchTodos}
          searchTerm={this.state.searchTerm}
          taskslistarray={this.state.taskslistarray}
          toggleItemObj={toggleItemObj}
          handleChanges={this.handleChanges}
        />
      </div>
    );
  }
}
export default App;