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
        const { id } = this.props.params;
    
        this.state = {
            title: "",
            status: "",
            date: "",
            id:id,
            errors:{}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }

      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

      onSubmit(e) {
        e.preventDefault();
    
        const newTask = {
            title: this.state.title,
            status: this.state.status,
            date: this.state.date,
        };
        this.props.addTaskToTodoLIst(
          this.state.id,
          newTask,
          this.props.history
        );
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
                    <h4 className="display-4 text-center">Add New Todo List Task</h4>
                    <br></br>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" name="title" placeholder="Todo List Task Title"
                              value={this.state.title} 
                              onChange={this.onChange}
                              />
                        </div>
                        <br></br>
                        
                        <br></br>
                        <div class="form-group">
                            <input type="date" class="form-control form-control-lg" name="date"
                            value={this.state.date}
                            onChange={this.onChange} /> 
                        </div>
                        <br></br>

                        <div className="form-group">
                        <select
                            className="form-control form-control-lg"
                            name="status"
                            value={this.state.status}
                            onChange={this.onChange}
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
  )(withParams(AddTodoListTask));
