import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap-grid.min.css"

import Navbar from "./components/navbar.component"
import PlacesList from "./components/places-list.component";
import EditPlace from "./components/edit-place.component";
import CreatePlace from "./components/create-place.component";
import CreateUser from "./components/create-user.component";
import CreateGroup from "./components/create-group.component";
import EditUser from "./components/edit-user.component";
import LoginUser from "./components/login-user.component";

import './App.css';


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
          <br/>
          <Route path="/" exact component={PlacesList} />
          <Route path="/edit/:id" component={EditPlace} />
          <Route path="/create" component={CreatePlace} />
          <Route path="/user" component={CreateUser} />
          <Route path="/group" component={CreateGroup} />
          <Route path="/edit-user/:id" component={EditUser} />
          <Route path="/login-user" component={LoginUser} />
      </div>
    </Router>
  );
}

export default App;
