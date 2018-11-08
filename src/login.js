import React, { Component } from 'react';
import LambdaSchool from "./media/lambdaschool.png";

import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }


    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    handleClick = (e) => {
        let promise = axios.post("https://ux1lectures.herokuapp.com/auth/login/", this.state)
        promise
            .then(response => {
                //localStorage set item
                localStorage.setItem("jwt", response.data.token);
                this.props.history.push("/lectures");
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    render(text) {
        return (
            <div className="login-register-wrapper">
                <header className="App-header">
                    <img className="App-logo" src={LambdaSchool} alt="lambda-school-logo"/>
                     <h2 className="title">{"Log-in to View UX1 Lectures"} </h2>
                     <img className="App-logo" src={LambdaSchool} alt="lambda-school-logo"/>
                </header>
                <div className="form-wrapper">
                    <label>Username:</label>
                    <input className="input-text" name="username" value={this.state.username} type="text" onChange={this.handleChange}/>
                    <label>Password:</label>
                    <input className="input-text" name="password" value={this.state.password} type="password" onChange={this.handleChange}/>
                    <div><button className="submit-button" onClick={this.handleClick}>Log-in</button></div>
                    <div className="register-link"><Link to="/register" className="link-style">New User? Register Here!</Link></div>
                </div>
                

            </div>
        );
    }
}

export default Login;