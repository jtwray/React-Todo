import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";



class App extends React.Component {
    constructor() {
        super();
        this.state={
            taskslistarray: [],
            filteredarray: [],
            searchTerms:""
        };
    }
    toggleItemObj=id => {
        this.setState( {
            taskslistarray: this.state.taskslistarray.map( itemObj => {
                if( itemObj.id===id ) {
                    return {
                        ...itemObj,
                        completed: !itemObj.completed
                    };
                }
                return itemObj;
            } )
        } );
    };
    componentDidMount() {
        const list=window.localStorage.getItem( 'savedList' );
        const parsedList=JSON.parse( list );
        this.setState( {
            taskslistarray: parsedList,
        } )
    };
    handleChange=event => {this.setState( {[event.target.name]: event.target.value} ); this.filterList();}

    filterList=() => {
        console.log( "newList:", this.state.newList, "taskslistarray:", this.state.taskslistarray );
        this.setState( {newList: this.state.taskslistarray.filter( i => String( i.name ).toLowerCase().trim().includes( String( this.state.searchTerms ).toLowerCase().trim() ) )} )
    }

    addItem=item => {
        const copiedTasks=this.state.taskslistarray.slice();

        const newItem={
            task: item,
            id: Date.now(),
            completed: false

        };
        copiedTasks.push( newItem );
        console.log( copiedTasks );
        this.setState( {taskslistarray: copiedTasks}, () => {window.localStorage.setItem( 'savedList', JSON.stringify( this.state.taskslistarray ) );} );
    };
    clearCompleted=() => {
        const copiedTasks=this.state.taskslistarray.slice();
        const completedTasks=copiedTasks.filter( item => !item.completed===true );
        this.setState( {taskslistarray: completedTasks}, () => {
            window.localStorage.setItem( 'savedList', JSON.stringify( this.state.taskslistarray ) );
        } );
    };

    render() {
        return (
            <div className='App'>
                <div className='header'>
                    <h1> ToDoList</h1>
                   
                    <TodoForm
                     addItem={this.addItem}
                     taskslistarray={this.state.taskslistarray}
                      handleChange={this.handleChange}
                      searchTerms={this.state.searchTerms}
                       filterList={this.filterList} />
                </div>
                <TodoList
                    newList={this.state.newList}
                    taskslistarray={this.state.taskslistarray}
                    toggleItemObj={this.toggleItemObj}
                    handleChange={this.handleChange}
                />

                <button onClick={this.clearCompleted}>ClearCompleted</button>
            </div>
        );
    }
}

const rootElement=document.getElementById( "root" );
ReactDOM.render( <App />, rootElement );
