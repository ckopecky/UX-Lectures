import React, { Component } from 'react';
import Footer from "./footer";
import LectureList from './LectureList';
import Search from './search';
import LambdaSchool from "./media/lambdaschool.png";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" src={LambdaSchool} alt="lambda-school-logo"/>
          <h2>
            Lectures Database for UX1
          </h2>
          <img className="App-logo" src={LambdaSchool} alt="lambda-school-logo"/>
        </header>
        <div className="main-container">
          <LectureList />
          <Footer />
        </div>

      </div>
    );
  }
}

export default App;
