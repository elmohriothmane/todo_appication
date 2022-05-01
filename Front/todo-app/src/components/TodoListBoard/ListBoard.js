import React, { Component } from 'react'
import { Link, useParams } from "react-router-dom";
import TodoListTask from './TodoListTask/TodoListTask';

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTasks } from "../../actions/TaskActions";




function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }



 class ListBoard extends Component {

    componentDidMount() {
        const { id } = this.props.params;
        this.props.getTasks(id);
      }
 
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


ListBoard.propTypes = {
    tasks: PropTypes.object.isRequired,
    getTasks: PropTypes.func.isRequired
  };
  
  const mapStateToProps = state => ({
    tasks: state.task.todolist_tasks
  });
  
export default connect(
    mapStateToProps,
    { getTasks }
)(withParams(ListBoard));