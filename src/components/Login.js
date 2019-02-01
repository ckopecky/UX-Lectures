import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import "../css/Login.css";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            loggedIn: false,
            loading: false
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
                console.log(response);
                localStorage.setItem("jwt", response.data.token);
                this.setState({loggedIn: true});
                this.props.history.push({
                    pathname: '/lectures',
                    state: { lectures: response.data.lectures, loggedIn: true, loading: false }
                  });
            })
            .catch(err => {
                console.log("Cannot retrieve login", err.message);
            })
    }

    render(text) {
        return (
            <div className="login-register-wrapper">
                <Header headerTitle={this.props.headerTitle}/>
                <div className="form-wrapper">
                    <label>Username:</label>
                    <input className="input-text" name="username" value={this.state.username} type="text" onChange={this.handleChange}/>
                    <label>Password:</label>
                    <input className="input-text" name="password" value={this.state.password} type="password" onChange={this.handleChange}/>
                    <button className="submit-button" onClick={this.handleClick}>Log-in</button>
                    <div className="register-link"><Link to="/register" className="link-style">New User? Register Here!</Link></div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Login;