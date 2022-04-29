import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import AddTodoList from './components/TodoListItem/AddTodoList';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/addTodoList" element={<AddTodoList/>}/>
      </Routes>
      
    </div>

    </Router>
  );
}

export default App;
