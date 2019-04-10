import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import Search from './pages/Search';
import Saved from './pages/Saved';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <NavBar />
                <Jumbotron />
                <Route exact path="/" component={Saved} />
                <Route exact path="/about" component={Saved} />
                <Route exact path="/blog" component={Search} />
            </div>
        </Router>
    );
  }
}

export default App;
