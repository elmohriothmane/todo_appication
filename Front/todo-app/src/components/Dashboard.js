import React, { Component } from 'react'
import CreateTodoLIstButton from './TodoList/CreateTodoLIstButton';
import TodoListItem from './TodoList/TodoListItem';

import { connect } from "react-redux";
import { getTodoLists } from "../actions/TodoListActions";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class Dashboard extends Component {

  componentDidMount() {
        this.props.getTodoLists();
  }
  
  render() {

    const { todolists } = this.props.todolist;
    return (
        <div className="projects">
        
          <div className="container py-5 h-100">
           <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card" id="list1" style={{borderRradius:'.75rem', backgroundColor: '#2e57a1'}}>
                <div className="card-body py-4 px-4 px-md-5">

                  <p className="h1 text-center mt-3 mb-4 pb-3 " style={{color:'white'}}>
                    My Todo Lists
                  </p>

                  <CreateTodoLIstButton/>
                  <hr className="my-4"/>

                  {todolists.map(todolist => (
                          <TodoListItem key={todolist.id} todolist={todolist} />
                          ))}

                </div>
              </div>
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