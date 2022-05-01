import React, { Component } from 'react'
import { Link, useParams } from "react-router-dom";
import TodoListTask from './TodoListTask/TodoListTask';




function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }



 class ListBoard extends Component {
 
  render() {

    const {id} = this.props.params;
    console.log(id);
    return (
        <div className="container">
        <Link to={`/addTodoListTask/${id}`}  className="btn btn-primary mb-3">
            <i className="fas fa-plus-circle"> Create TODO List Task</i>
        </Link>
        <br />
        <hr />  
        <TodoListTask/>

    </div>
    )
  }
}

export default withParams(ListBoard);
