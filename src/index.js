import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import TodoList from "./components/TodoComponents/TodoList.js";

const taskslistarray =[
    {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
    },
    { 
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
    }
];

class App extends React.Component{
    constructor(){
        super();
        this.state={
            taskslistarray        
        };
    }
toggleItemObj = id => {
    this.setState({ 
        taskslistarray:  this.state.taskslistarray.map(itemObj => {
        if(itemObj.id ===id){
            return{

                ...itemObj,
                completed: !itemObj.completed
            }
            
        }
        return itemObj;
        })
    
    });   
}; 
render() { 
    return (
        <div className="App">
            <div className="header">
                <h1> ToDoList</h1>
            </div>
            <TodoList taskslistarray={this.state.taskslistarray}
                      toggleItemObj={this.toggleItemObj}
            />
        </div>
    );
}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
