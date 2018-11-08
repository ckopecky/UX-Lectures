import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LambdaSchool from "./media/lambdaschool.png";

import "./index.css";
class LectureList extends Component {
    state = {
        lectures: [],
        "Unit Title": "",
        "Module Title": "",
        "Video Title": "",
        "Website-URL": "",
        loading: true
    }

    componentWillMount() {
        const token = localStorage.getItem("jwt");
        let promise = axios.get("https://ux1lectures.herokuapp.com/api/lectures", {headers: {Authorization: token}});
        promise
            .then((lectures) => {
                this.setState({lectures: lectures.data, loading: false});
            })
            .catch((err) => {
                console.log(err.message);
            })

            
    }

    handleSignOut = () => {
        if (localStorage.getItem('jwt')) {
            localStorage.removeItem('jwt');
    
            this.props.history.push('/login');
        }
    };

    //will need to axios request to server on CDM to get list of lectures from database then map over the list to fill in values. 
    render() {
        let content;
        if (this.state.loading) {
            setTimeout(3000)
            content = <div className="loading">Loading...</div>;
        } 
        else {
            content =
            <div>
                <header className="App-header">
                    <img className="App-logo" src={LambdaSchool} alt="lambda-school-logo"/>
                    <h2>
                    Lectures Database for UX1
                    </h2>
                    <img className="App-logo" src={LambdaSchool} alt="lambda-school-logo"/>
                </header>
                <div className="auth-container">
                    <div className="signout-login">
                        {!localStorage.getItem("jwt") &&
                            <div className="please-signin">
                                <Link className="login-statement" to="/login"><h3 className="login-statement">Please Sign in to access lecture videos</h3>
                                </Link>
                            </div>}
                    </div>
                        {localStorage.getItem("jwt") && 
                           <div className="sign-out" onClick={this.handleSignOut}>Sign Out</div>}
                    <div className="lecture-list-container">
                        {localStorage.getItem("jwt") &&
                                this.state.lectures.map(lecture => {
                                    return(
                                        <div key={lecture.id} className="single-lecture-block">
                                                <div className="unit-title">{lecture["Unit Title"]}</div>
                                                <div className="module-title">{lecture["Video Title"]}</div>
                                                <div className="website-url-div">
                                                    <a className="website-url" target="_blank" rel="noopener noreferrer" href={lecture["Website-URL"]}>Lecture Video </a>
                                                </div>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
            </div>
        }
        return (
            <div>
              {content}
            </div>
          )
    }
}

export default LectureList;