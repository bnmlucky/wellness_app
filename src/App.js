import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from './components/navbar';
import ExercisesList from "./components/exercises-list";
import EditExercises from "./components/edit-exercises";
import CreateExercise from "./components/create-exercise";
import CreateUsers from "./components/create-user.js";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercises} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUsers} />
        <footer>Created by Natalia Titova in 2019</footer>
      </div>
    </Router>
  );
}

export default App;
