import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import SearchForm from './components/SearchForm';
import SavedView from './components/SavedView';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <NavBar />
                <Jumbotron />
                <Route exact path="/" component={SearchForm} />
                <Route exact path="/saved" component={SavedView} />
                <Route path="/search" component={SearchForm} />
            </div>
        </Router>
    );
  }
}

export default App;
