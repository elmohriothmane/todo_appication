import React, { Component } from 'react'
import { Link, useParams } from 'react-router-dom';

import { connect } from "react-redux";
import classnames from "classnames";
import { addTaskToTodoLIst } from "../../../actions/TaskActions";
import PropTypes from "prop-types";


function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }


class AddTodoListTask extends Component {

    constructor(props) {
        super(props);
        const { id } = this.props;
    
        this.state = {
            title: "",
            status: "",
            date: "",
            id:id,
            errors:{}
        };
      }


  render() {

    const {id} = this.props;
    return (
        <div className="add-PBI">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <Link  to={`/projectBoard/${id}`} className="btn btn-light">
                        Back to Todo List Board
                    </Link>
                    <br></br>
                    <br></br>
                    <h4 className="display-4 text-center">Add /Update Todo List Task</h4>
                    <br></br>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" name="title" placeholder="Todo List Task Title"
                              value={this.state.title} />
                        </div>
                        <br></br>
                        <div className="form-group">
                            <textarea className="form-control form-control-lg" placeholder="Task Description" name="description"></textarea>
                        </div>
                        <br></br>
                        <div class="form-group">
                            <input type="date" class="form-control form-control-lg" name="date"
                            value={this.state.date} /> 
                        </div>
                        <br></br>

                        <div className="form-group">
                        <select
                            className="form-control form-control-lg"
                            name="status"
                            value={this.state.status}
                        >
                            <option value="">Select Status</option>
                            <option value="TO_DO">TO DO</option>
                            <option value="IN_PROGRESS">IN PROGRESS</option>
                            <option value="DONE">DONE</option>
                        </select>
                        </div>

                        <input type="submit" className="btn btn-primary btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
  }
}



AddTodoListTask.propTypes = {
    addTaskToTodoLIst: PropTypes.func.isRequired
  };
  
  export default connect(
    null,
    { addTaskToTodoLIst }
  )(AddTodoListTask);
