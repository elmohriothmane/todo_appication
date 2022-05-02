import React from 'react'
import { Link } from 'react-router-dom';



const CreateTodoLIstButton = () => {
  return (
      
    <React.Fragment>
        <Link to="/addTodoList" className="btn btn-lg " style={{color:'#090f79',backgroundColor:'white'}}>
                        Create a Todo List
        </Link>

    </React.Fragment>
  )
};

export default CreateTodoLIstButton
