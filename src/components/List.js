import React, {Component} from 'react';
import Task from './Task';

class List extends Component {
    render() {
        return(
            <div className="List">
                {this.props.todos.map((todo, index) => {
                    return(
                        <Task 
                            handleClick = {this.props.handleClick}
                            key = {index}
                            index = {index}
                            todo = {todo}
                        />
                    );
                })}
            </div>
        );
    }
}

export default List;