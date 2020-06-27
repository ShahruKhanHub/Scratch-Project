import React, { Component } from 'react';

import NavBar from './component/navigationBar/navBar.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './component/logedIn/Login.js';
import Canvas from './component/logedIn/canvas.jsx';
import Home from './component/logedIn/home'

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      logStatus: false,
    }
    this.login = this.login.bind(this);
  }

  login() {
    
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Switch>
            <Route path="/login"  component={Login}/>
            <Route path="/canvas"  component={Canvas}/>
            <Route path="/"  component={Home}/>

          </Switch>
        </div>
    </Router>
    )
  }
}


export default App;
