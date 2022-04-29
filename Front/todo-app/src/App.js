import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import AddTodoList from './components/TodoListItem/AddTodoList';
import store from "./strore"
import {Provider} from "react-redux"

function App() {
  return (

    <Provider store={store}>
    <Router>
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/addTodoList" element={<AddTodoList/>}/>
      </Routes>
      
    </div>

    </Router>
    </Provider>
  );
}

export default App;
