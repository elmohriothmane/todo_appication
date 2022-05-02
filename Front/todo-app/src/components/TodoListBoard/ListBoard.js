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

    const tasks = this.props.tasks.map(task => (
        <TodoListTask key={task.id} task={task} />
      ));


      let todoTasks = [];
      let inProgressTasks = [];
      let doneTasks  = [];


      for (let i = 0; i < tasks.length; i++) {
        console.log(tasks[i]);
  
        if (tasks[i].props.task.status === "TO_DO") {
            todoTasks.push(tasks[i]);
        }
  
        if (tasks[i].props.task.status === "IN_PROGRESS") {
            inProgressTasks.push(tasks[i]);
        }
  
        if (tasks[i].props.task.status === "DONE") {
            doneTasks.push(tasks[i]);
        }
      }
      
    console.log(id);
    return (
        <div className="container">
        <Link to={`/addTodoListTask/${id}`}  className="btn  mb-3" style={{backgroundColor:'#282893',color:'white'}}>
            <i className="fas fa-plus-circle"> Create TODO List Task</i>
        </Link>
        <br />
        <hr />  

        <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="card text-center mb-2">
                    <div className="card-header text-white" style={{backgroundColor:'#216b80'}}>
                        <h3>TO DO</h3>
                    </div>
                </div>

                
                {todoTasks}

            </div>
            <div className="col-md-4">
                <div className="card text-center mb-2">
                    <div className="card-header  text-white" style={{backgroundColor:'#282893'}}>
                        <h3>In Progress</h3>
                    </div>
                </div>

                {inProgressTasks}
            </div>
            <div className="col-md-4">
                <div className="card text-center mb-2">
                    <div className="card-header  text-white" style={{backgroundColor:'#0a620c'}}>
                        <h3>Done</h3>
                    </div>
                    {doneTasks}
                </div>
            </div>
        </div>
    </div>
        

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