import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Footer from "./components/Footer";
import LectureList from './components/LectureList';
import Login from './components/Login';
import Register from './components/Register';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      lectures: [],

    }
  }

  componentDidMount() {
    axios.get("http://localhost:7000/api/lectures")
      .then((lectures) => {
        console.log(lectures);
        this.setState({lectures: lectures.data});
      })
      .catch((err) => {
        console.log(err.message, "Error from catch cdm");
      })

        
}

  render() {
    return (
      <div className="App">
        <div className="main-container">
        <Switch>
          <Route 
            exact path ="/" 
            render={(...props) => <Login headerTitle="Please login to access UX1 Lectures" loggedIn={this.state.loggedIn}
            />}/>
          <Route 
            path ="/login" 
            render={(...props) => <LectureList 
              headerTitle="Please login to access UX1 Lectures" 
              lectures={this.state.lectures}
            />}/>          
          <Route 
            path ="/register" 
            render={(...props) => <Register 
              headerTitle= "Please register to access UX1 lectures" 
              register={this.state.register} 
              />}/>}
          <Route  
            path="/lectures"
            render={(...props) => <LectureList 
              lectures={this.state.lectures}
              headerTitle="UX1 Lectures"
              />}/>}
            
        </Switch>
        </div>

      </div>
    );
  }
}

export default App;
