import React, { Component } from 'react'
import CreateTodoLIstButton from './TodoListItem/CreateTodoLIstButton';
import TodoListItem from './TodoListItem/TodoListItem';

class Dashboard extends Component {
  render() {
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

                    <TodoListItem/>

                </div>
            </div>
        </div>
    </div>

    )
  }
}

export default Dashboard;