import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from "./components/TodoComponents/TodoList.js";

const tasks =[
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
            tasks        
        };
    }

render() {
    return (
        <div className="App">
            <div className="header">
                <h1> ToDoList</h1>
            </div>
            <TodoList tasks={this.state.tasks}/>
        </div>
    );
}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
