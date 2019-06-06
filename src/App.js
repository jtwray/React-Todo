import React from 'react';
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            message:''
        }
    }
    handleInputChangeEvent =(event) => this.setState({message: event.target.value});
    handleSingleClickEvent = () => alert('single click Event Triggered');
    handleMouseOnEvent =() => alert('Mouse landed on the mouse enter text,');
    render() {
        return (
            <div className="App">
                <h1> Event HAndlers</h1>
                <div>this.message:{this.state.message}</div>
                <button onClick={this.handleSingleClickEvent}>Single CLick HAndler </button>
                <div onMouseOver={this.handleMouseOnEvent}>MOUSE ENTER</div>

                <input type="type" placeholder="Change me" onChange={this.handleInputChangeEvent}/>

            </div>
            
        );
    }
}
 const rootElement = document.getElementById('root');
 ReactDOM.render(<App />, rootElement);
 export default App;