import React, { Component } from 'react';
import axios from 'axios';
import LambdaSchool from "./media/lambdaschool.png";
import { Link } from 'react-router-dom';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    
    handleChange =  (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    //click handler

    handleClick = (e) => {
        console.log("clicked!");
        let promise = axios.post("https://ux1lectures.herokuapp.com/auth/register/", this.state);
        if(this.state.password !== this.state.confirmPassword) {
            console.log("Passwords do not match! Try again.")
        } else {
        promise
            .then(response => {
                console.log("response", response);
                localStorage.setItem("jwt", response.data.token);
                console.log(localStorage.getItem("jwt"));
                this.props.history.push("/login");
            })
            .catch(err => {
                console.log({Error: err});
            });
        }
    };


    render() {
        return (
            <div className="login-register-wrapper">
                <header className="App-header">
                    <img className="App-logo" src={LambdaSchool} alt="lambda-school-logo"/>
                     <h2 className="title">{"New User? Register to View UX1 Lectures"} </h2>
                     <img className="App-logo" src={LambdaSchool} alt="lambda-school-logo"/>
                </header>
                <div className="form-wrapper">
                    <div className="form-input">
                        <label>First Name:</label>
                        <input className="input-text" onChange={this.handleChange} type="text" name="firstName" value={this.state.firstName}required={true} placeholder="Awesome"/>
                    </div>
                    <div className="form-input">
                        <label>Last Name:</label>
                        <input className="input-text" onChange={this.handleChange} type="text" name="lastName" value={this.state.lastName}required={true} placeholder="Designer"/>
                    </div>
                    <div className="form-input">
                        <label>Email Address:</label>
                        <input className="input-text" onChange={this.handleChange} type="text" name="email" value={this.state.email}required={true} placeholder="AwesomeUXDesigner@gmail.com"/>
                    </div>
                    <div className="form-input">
                        <label>Username:</label>
                        <input className="input-text" onChange={this.handleChange} type="text" name="username" value={this.state.username}required={true} placeholder="AwesomeUXDesigner"/>
                    </div>
                    <div className="form-input">
                        <label>Password:</label>
                        <input className="input-text" onChange={this.handleChange} type="password" name="password" value={this.state.password}required={true} placeholder="Must be at least 8 chars"/>
                    </div>
                    <div className="form-input">
                        <label>Confirm Password:</label>
                        <input className="input-text" onChange={this.handleChange} type="password" name="confirmPassword" value={this.state.confirmPassword} required={true} placeholder="Must be at least 8 chars"/></div>
                    <div className="form-input">
                        <div className="submit-button" onClick={this.handleClick}>Register User
                        </div>
                        <div className="register-link"><Link to="/login" className="link-style">Already have an account? Log in here.</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Register;