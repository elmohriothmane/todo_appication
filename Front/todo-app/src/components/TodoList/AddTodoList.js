import React, { Component } from 'react'

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProject } from "../../actions/TodoListActions";
import classnames from "classnames";



class AddTodoList extends Component {

  constructor(){
      super()

      this.state={
        listName:"",
        description:"",
        errors: {}
      }

      this.onChange=this.onChange.bind(this);
      this.onSubmit= this.onSubmit.bind(this);
  }

  //life cycle hooks
  componentWillReceiveProps(nextProps) {

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
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

    const { errors } = this.state;
    return (
        <div className="register">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Create / Edit A New List form</h5>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" 

                                className={classnames("form-control form-control-lg", {
                                    "is-invalid": errors.message
                                })}

                                placeholder="Todo List Title" name="listName" 
                                value={this.state.listName}
                                onChange={this.onChange}
                            />
                             
                        </div>
                        
                        <br/>
                        <div className="form-group">
                            <textarea 
                             
                             className={classnames("form-control form-control-lg", {
                                    "is-invalid": errors.message
                                })}
                                
                            placeholder="TodoList Description" name="description"
                            value={this.state.description}
                            onChange={this.onChange} ></textarea>
                        </div>
                        <br/>

                        <p className="invalid">{errors.message}</p>
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
    createProject: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    errors: state.errors
  });

export default connect(
    mapStateToProps,
    {  createProject }
  )(AddTodoList);