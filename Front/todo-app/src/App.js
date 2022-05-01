import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import AddTodoList from './components/TodoList/AddTodoList';
import store from "./strore"
import {Provider} from "react-redux"
import UpdateTodoList from './components/TodoList/UpdateTodoList';
import ListBoard from './components/TodoListBoard/ListBoard';
import AddTodoListTask from './components/TodoListBoard/TodoListTask/AddTodoListTask';

function App() {
  return (

    <Provider store={store}>
    <Router>
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/addTodoList" element={<AddTodoList/>}/>
        <Route exact path="/updateTodoList/:id" element={<UpdateTodoList/>} />  
        <Route exact path="/projectBoard/:id" element={<ListBoard/>} />
        <Route exact path="/addTodoListTask/:id" element={<AddTodoListTask/>} />
      </Routes>
      
    </div>

    </Router>
    </Provider>
  );
}

export default App;
