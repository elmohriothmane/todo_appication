import React, { Component } from 'react'

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProject } from "../../actions/TodoListActions";


class AddTodoList extends Component {

  constructor(){
      super()

      this.state={
        listName:"",
        description:""
      }

      this.onChange=this.onChange.bind(this);
      this.onSubmit= this.onSubmit.bind(this);
  }

  onChange(e){
      this.setState({[e.target.name]:e.target.value})
  }

  onSubmit(e){

      e.preventDefault()
      const newTodoList ={
        listName:this.state.listName,
        description:this.state.description,
      }

      this.props.createProject(newTodoList, this.props.history);
  }
  render() {
    return (
        <div className="register">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Create / Edit A New List form</h5>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg " placeholder="Todo List Title" name="listName" 
                                value={this.state.listName}
                                onChange={this.onChange}
                            />
                        </div>
                        
                        <br/>
                        <div className="form-group">
                            <textarea className="form-control form-control-lg" placeholder="TodoList Description" name="description"
                            value={this.state.description}
                            onChange={this.onChange} ></textarea>
                        </div>
                        <br/>

                        <input type="submit" className="btn btn-primary btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>

    )
  }
}


AddTodoList.propTypes = {
    createProject: PropTypes.func.isRequired
  };

export default connect(
    null,
    {  createProject }
  )(AddTodoList);