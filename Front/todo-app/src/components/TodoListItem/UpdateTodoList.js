import React, { Component } from 'react'

class UpdateTodoList extends Component {
  render() {
    return (
        <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Update Todolist form</h5>
              <hr />
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg "
                    placeholder="TodoList Name"
                  />
                </div>
               
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="TodoList Description"
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

export default UpdateTodoList;