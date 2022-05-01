import React from 'react'
import { Link } from 'react-router-dom';



const CreateTodoLIstButton = () => {
  return (
      
    <React.Fragment>
        <Link to="/addTodoList" className="btn btn-lg btn-info">
                        Create a List
        </Link>

    </React.Fragment>
  )
};

export default CreateTodoLIstButton
