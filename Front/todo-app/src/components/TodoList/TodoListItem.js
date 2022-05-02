import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle,faEdit,faDeleteLeft,faListCheck,faCalendarCheck} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteTodoList } from "../../actions/TodoListActions";
import PropTypes from "prop-types";


class TodoListItem extends Component {

  onDeleteClick = id => {
        this.props.deleteTodoList(id);
        window.location.reload();
    };

  render() {

    const { todolist } = this.props;
    return (
        <div className="container">
        <ul className="list-group list-group-horizontal rounded-0 bg-transparent">
              <li
                className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                <div className="form-check" >
                <Link to={`/projectBoard/${todolist.id}`}>
                <FontAwesomeIcon icon={faListCheck} />
                </Link>
                </div>
              </li>
              <li
                className="list-group-item text-truncate  px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                <p className="lead fw-normal mb-0" style={{ color: 'white'}} >{todolist.listName}</p>
              </li>
              <li
                className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                <p className="lead fw-normal mb-0" style={{ color: 'white'}} >{todolist.description}</p>
              </li>
              <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                <div className="d-flex flex-row justify-content-end mb-1">
                <Link to={`/updateTodoList/${todolist.id}`}><FontAwesomeIcon icon={faEdit} /></Link> 
                  <a className="text-danger mx-2" style={{cursor:'pointer'}} title="Delete todo" onClick={this.onDeleteClick.bind(
                                this,
                                todolist.id
                            )}> <FontAwesomeIcon icon={faDeleteLeft} /></a>

                </div>
                <div className="text-end text-muted">
                  <a className=""  title="Created date" style={{color: '#f1f1f1',cursor:'pointer'}}>
                    <p className="small mb-0"><FontAwesomeIcon icon={faCalendarCheck} /> 28th Jun 2020</p>
                  </a>
                </div>
              </li>
            </ul>
            <hr />
    </div>
    )
  }
}

TodoListItem.propTypes = {
    deleteTodoList : PropTypes.func.isRequired
  };
  
  export default connect(
    null,
    { deleteTodoList }
  )(TodoListItem);