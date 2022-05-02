import React, { Component } from 'react'
import { getTodoList,createProject} from "../../actions/TodoListActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';

import store from '../../../src/strore';




function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}


class UpdateTodoList extends Component {


  constructor(props) {
    super(props);

    this.state = {
      id: "",
      listName: "",
      description: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    const {
      id,
      listName,
      description
    } = nextProps.todolist.todolist;

    this.setState({
      id,
      listName,
      description
    });
  }
 


componentDidMount() {

        const {id} = this.props.params;
        this.props.getTodoList(id);
}



onChange(e) {
  this.setState({ [e.target.name]: e.target.value });
}

onSubmit(e) {
  e.preventDefault();

  const updateProject = {
    id: this.state.id,
    listName: this.state.listName,
    description: this.state.description,
  };

  this.props.createProject(updateProject, this.props.history);
}

  render() {
    return (
      
        <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Update Todo List</h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg "
                    placeholder="TodoList Name"
                    name="listName"
                    value={this.state.listName}
                    onChange={this.onChange}
                    
                  />
                </div>
               
               <br></br>
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="TodoList Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>
                
                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


UpdateTodoList.propTypes = {
    getTodoList: PropTypes.func.isRequired,
    createProject: PropTypes.func.isRequired,
    todolist: PropTypes.object.isRequired
  };


const mapStateToProps = state =>{

  return ({
    todolist: state.todolist
  });
} 


export default connect(
    mapStateToProps,
    { getTodoList,createProject }
  )(withParams(UpdateTodoList));