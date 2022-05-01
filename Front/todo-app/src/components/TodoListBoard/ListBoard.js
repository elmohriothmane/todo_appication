import React, { Component } from 'react'
import { Link, useParams } from "react-router-dom";




function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }



 class ListBoard extends Component {
 
  render() {

    const {id} = this.props.params;
    console.log(id);
    return (
        <div className="container">
        <Link to={`/addTodoListTask/${id}`}  className="btn btn-primary mb-3">
            <i className="fas fa-plus-circle"> Create TODO List Task</i>
        </Link>
        <br />
        <hr />
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-secondary text-white">
                            <h3>TO DO</h3>
                        </div>
                    </div>

                    <div className="card mb-1 bg-light">

                       
                        <div className="card-body bg-light">
                            <h5 className="card-title">Todo list title</h5>
                            <p className="card-text text-truncate ">
                            Todo list description
                            </p>
                            <a  className="btn btn-primary">
                                View / Update
                            </a>

                            <button className="btn btn-danger ms-4">
                                Delete
                            </button>
                        </div>
                    </div>

                </div>
                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-primary text-white">
                            <h3>In Progress</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-success text-white">
                            <h3>Done</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    )
  }
}

export default withParams(ListBoard);
