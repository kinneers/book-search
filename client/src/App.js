import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import SearchView from './components/SearchView';
import SavedView from './components/SavedView';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <NavBar />
                <Jumbotron />
                <Route exact path="/" component={SearchView} />
                <Route exact path="/saved" component={SavedView} />
                <Route exact path="/search" component={SearchView} />
            </div>
        </Router>
    );
  }
}

export default App;
