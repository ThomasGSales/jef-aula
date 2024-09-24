import React, { useContext } from "react";
import "./App.css";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Home from "./pages/home/index";
import Todo from "./pages/todo/index";
import Sobre from "./pages/sobre/index";
import Dashboard from './pages/dashboard/index';
import Login from './pages/login/index';
import { TodoContext } from "./contexts/TodoContext";
import { TemaContext } from "./contexts/TemaContext";
import { TodoService } from "./utils/TodoService";
import { Api } from "./utils/api/api";
import { auth, db } from "./firebaseConfig";
import { FirebaseContext } from "./contexts/firebaseContext";



function App() {
  const api: Api = new Api(db, auth);

  const todoService = new TodoService()
  const renderizarBotoes = () => (

    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/todo">Todo</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>          
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/login">Login</Link></li>

        </ul> 
      </nav>

  </div>
  )


  return (

    <TemaContext.Provider value={'dark'}>
      <FirebaseContext.Provider value={{ api }}>
        <Router>
          {renderizarBotoes()}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={
              <TodoContext.Provider value={{ todoService }}>
                <Todo />
              </TodoContext.Provider>
            } />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </FirebaseContext.Provider>
  </TemaContext.Provider>
  );
}

export default App;
