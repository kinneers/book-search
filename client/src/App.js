import React, { Component, Router, Route } from 'react';
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
                <Route exact path="/" component={Search} />
                <Route exact path="/Search" component={Search} />
                <Route exact path="/Saved" component={Saved} />
            </div>
        </Router>
    );
  }
}

export default App;
