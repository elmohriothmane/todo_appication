import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { updateTaskItem,deleteTask} from "../../../actions/TaskActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";



class TodoListTask extends Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

  }

  onChange(e) {
    const { task } = this.props;
    
    const updatedTask = {
      id: task.id,
      title: task.title,
      status: e.target.value,

    };
    this.props.updateTaskItem(updatedTask);
    window.location.reload();

  }

  onDeleteClick = id => {
    this.props.deleteTask(id);
    window.location.reload();
  };
  


  render() {

    const { task } = this.props;
    console.log(task)

    return (
                <div className="card mb-1 bg-light">

                   
                    <div className="card-body bg-light">
                        <h5 className="card-title">{task.title}</h5>
                        <p className="card-text text-truncate ">
                        {task.title}
                        </p>
                        <select
                            className="form-control form-control-lg"
                            name="status"
                            onChange={this.onChange}
                        >
                            <option value="">Update Status</option>
                            <option value="TO_DO">TO DO</option>
                            <option value="IN_PROGRESS">IN PROGRESS</option>
                            <option value="DONE">DONE</option>
                            
                        </select> 

                        <button className="btn btn-danger ms-4"
                         onClick={this.onDeleteClick.bind(
                          this,
                          task.id,
                        )}
                        >
                        Delete
                        </button>
                    </div>
                </div>
    )
  }
}


TodoListTask.propTypes = {
  updateTaskItem: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default connect(
  null,
  { updateTaskItem,deleteTask }
)(TodoListTask);
