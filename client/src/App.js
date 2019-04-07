import React, { Component, Router, Route } from 'react';
import NavBar from './NavBar';
import Jumbotron from './Jumbotron';
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
                <Route exact path="/" component={Search} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/saved" component={Saved} />
            </div>
        </Router>
    );
  }
}

export default App;
