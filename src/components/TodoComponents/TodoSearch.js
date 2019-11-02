import React from 'react'
import TodoItem from './TodoItem'
export class TodoSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }

    }
    handleSearch = e => {
        this.props.handleChanges(e);
        this.props.searchTodos(this.props.searchTerm)
       
    }

    render(props) {
        // let searchResults = this.props.taskslistarray.filter((taskObj) => {
        //     return taskObj.task.toLowerCase().trim().indexOf(this.props.searchTerm.toLowerCase().trim()) !== -1;
        // })

        // (taskObj =>
        //     taskObj.task
        //       .toLowerCase()
        //       .trim()
        //       .includes(this.state.searchTerm.toLowerCase().trim())
        //   );
        return (
            <>

                <input
                    type="text"
                    name="searchTerm"
                    placeholder="🔍"
                    onChange={this.handleSearch}
                    value={this.props.searchTerm}


                />
                <ul><label>searchResults</label>
                    {this.props.searchResults&&this.props.searchResults.map((itemObj) => {
                        
                        return(<TodoItem
                        itemObj={itemObj}
                        toggleItemObj={this.props.toggleItemObj}
                        key={itemObj.id}
                    />)})
                }

                </ul>

                <>

                   
                </>
            </>
        )
    }
}