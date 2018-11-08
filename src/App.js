import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from "./footer";
import LectureList from './LectureList';
import Login from './login';
import Register from './register';
import Search from './search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="main-container">
        {/* <Search /> */}
        <Switch>
          <Route exact path = "/" component={Login}/>
          <Route path ="/login" component={Login}/>
          <Route path ="/lectures" component={LectureList}/>
          <Route path ="/register" component={Register}/>
        </Switch>
        <Footer />
        </div>

      </div>
    );
  }
}

export default App;
