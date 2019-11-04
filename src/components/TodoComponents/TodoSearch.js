import React from 'react'
import TodoItem from './TodoItem'
import { PropTypes } from 'prop-types'
export class TodoSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
        }

    }
    handleSearch = e => {
     
        // this.props.searchTodos(this.props.searchTerm)
       
    }
    static getDerivedStateFromProps(props, state) {
		if (props.taskslistarray !== state.prevPropsList ||
			props.prevSearchTerm !== props.searchTerm) {
			return {
				prevPropsList: props.taskslistarray,
				prevSearchTerm: props.searchTerm,
				searchResults: props.taskslistarray.filter(item => item.task.includes(props.searchTerm))
			}
		}
		return null;


	}
    render() {
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
<label>Search Results</label>
                <input
                    type="text"
                    name="searchTerm"
                    placeholder="🔍"
                    onChange={this.props.handleChanges}
                    value={this.props.searchTerm}


                />
                <ul>
                    {this.state.searchResults&&this.state.searchResults.map((itemObj) => {
                        
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
TodoSearch.propTypes = {
    searchTermms: PropTypes.arrayOf(PropTypes.string)
}