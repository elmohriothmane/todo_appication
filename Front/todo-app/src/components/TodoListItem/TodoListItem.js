import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faEdit,faDeleteLeft} from '@fortawesome/free-solid-svg-icons'


class TodoListItem extends Component {
  render() {
    return (
        <div className="container">
        <div className="card card-body bg-light mb-3">
            <div className="row">
                <div className="col-2">
                    <span className="mx-auto">Premiere List</span>
                </div>
                <div className="col-lg-6 col-md-4 col-8">
                    <h3>Spring / React Project</h3>
                    <p>Project to create a Kanban Board with Spring Boot and React</p>
                </div>
                <div className="col-md-4 d-none d-lg-block">
                    <ul className="list-group">
                        <a >
                            <li className="list-group-item board">
                              <FontAwesomeIcon icon={faBars} /> List Board
                            </li>
                        </a>
                        <a >
                            <li className="list-group-item update">
                            <FontAwesomeIcon icon={faEdit} /> Update List Info
                            </li>
                        </a>
                        <a >
                            <li className="list-group-item delete">
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

export default TodoListItem;