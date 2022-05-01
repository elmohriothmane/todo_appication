import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faEdit,faDeleteLeft} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteTodoList } from "../../actions/TodoListActions";
import PropTypes from "prop-types";


class TodoListItem extends Component {

  onDeleteClick = id => {
        this.props.deleteTodoList(id);
    };

  render() {

    const { todolist } = this.props;
    return (
        <div className="container">
        <div className="card card-body bg-light mb-3">
            <div className="row">
                <div className="col-2">
                    <span className="mx-auto">{todolist.listName}</span>
                </div>
                <div className="col-lg-6 col-md-4 col-8">
                    <h3>{todolist.description}</h3>
                </div>
                <div className="col-md-4 d-none d-lg-block">
                    <ul className="list-group">
                        <Link to={`/projectBoard/${todolist.id}`}>
                            <li className="list-group-item board">
                              <FontAwesomeIcon icon={faBars} /> List Board
                            </li>
                        </Link>
                        <Link to={`/updateTodoList/${todolist.id}`}>
                            <li className="list-group-item update">
                            <FontAwesomeIcon icon={faEdit} /> Update List Info
                            </li>
                        </Link>
                        <a >
                            <li className="list-group-item delete"
                            onClick={this.onDeleteClick.bind(
                                this,
                                todolist.id
                            )}>
                            <FontAwesomeIcon icon={faDeleteLeft} /> Delete List
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
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