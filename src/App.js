import React, { Component } from 'react';
import { Switch, Route, NavLink } from "react-router-dom";

import './App.css';

import HomePage from "./components/HomePage.js";
import AboutUs from "./components/AboutUs.js";
import ProjectList from "./components/ProjectList.js";
import NotFound from './components/NotFound';
import ProjectDetails from './components/ProjectDetails';

class App extends Component {
  render() {
    return (
      <main>
        <header>
          <h1>Project App</h1>
          <nav>
            {/* NavLink adds a special "active" class to the selected link */}
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/projects">Our Projects</NavLink>
          </nav>
        </header>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutUs} />
          <Route exact path="/projects" component={ProjectList} />
          <Route path="/projects/:projectId" component={ProjectDetails} />

          {/* 404 route ALWAYS LAST */}
          <Route component={NotFound} />
        </Switch>

        <footer>
          <p>Made with ⚙️ at Ironhack</p>
        </footer>
      </main>
    );
  }
}

export default App;
