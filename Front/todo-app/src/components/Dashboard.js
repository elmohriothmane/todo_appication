import React, { Component } from 'react'
import CreateTodoLIstButton from './TodoList/CreateTodoLIstButton';
import TodoListItem from './TodoList/TodoListItem';

import { connect } from "react-redux";
import { getTodoLists } from "../actions/TodoListActions";
import PropTypes from "prop-types";



class Dashboard extends Component {

  componentDidMount() {
        this.props.getTodoLists();
  }
  
  render() {

    const { todolists } = this.props.todolist;
    return (
        <div className="projects">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-4 text-center">Todo List</h1>
                    <br />
                        <CreateTodoLIstButton/>
                    <br />
                    <hr />

                    {todolists.map(todolist => (
                    <TodoListItem key={todolist.id} todolist={todolist} />
                    ))}

                </div>
            </div>
        </div>
    </div>

    )
  }
}

Dashboard.propTypes = {
    todolist: PropTypes.object.isRequired,
    getTodoLists: PropTypes.func.isRequired
  };

const mapStateToProps = state => ({
    todolist: state.todolist
});


export default connect(mapStateToProps,
    { getTodoLists }
)(Dashboard);