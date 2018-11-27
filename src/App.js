import React, { Component } from 'react';
// import logo from './logo.svg';

import './App.css';
import Welcome from './Welcome';
import Users from './Users';

// this line goes in App return <Welcome name="Sai Sagar" />
// import Users from './User';
// <Users name="Paul" age="45" />
// <Users name="Joe" age="35" />
// <Users name="Susan" age="30" />

class App extends Component {
  render(){
    return (<div className="App">
      <Welcome name="Acadgild" />
      <Users name="Paul" age="45" />
      <Users name="Joe" age="35" />
      <Users name="Susan" age="30" />

    </div>);
  }
}

export default App;