import React, { Component } from 'react';
import LectureList from './LectureList';
import LambdaSchool from "./media/lambdaschool.png";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" src={LambdaSchool} alt="lambda-school-logo"/>
          <p>
            Lectures Database for UX1
          </p>
          <img className="App-logo" src={LambdaSchool} alt="lambda-school-logo"/>

        </header>
        <div>
          <LectureList />

        </div>

      </div>
    );
  }
}

export default App;
