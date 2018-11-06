import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./index.css";
class LectureList extends Component {
    state = {
        lectures: [],
        "Unit Title": "",
        "Module Title": "",
        "Video Title": "",
        "Website-URL": ""
    }

    componentDidMount() {
        let promise = axios.get("https://ux1lectures.herokuapp.com/api/lectures");
        promise
            .then((lectures) => {
                console.log(this.state, "before");
                this.setState({lectures: lectures.data});
                console.log(this.state, "after");
            })
            .catch((err) => {
                console.log(err.message);
            })

            
    }
    //will need to axios request to server on CDM to get list of lectures from database then map over the list to fill in values. 
    render() {
        console.log(this.state.lectures, "lectures");
        return (
            <ul id="myUL" className="lecture-list-container">
            {this.state.lectures.map(lecture => {
                return(
                    <div>
                        <div key={lecture.id} className="single-lecture-block">
                            <div className="unit-title">{lecture["Unit Title"]}</div>
                            <li className="module-title">{lecture["Video Title"]}</li>
                            <a className="website-url" target="_blank" rel="noopener noreferrer" href={lecture["Website-URL"]}>Lecture Video (opens in new window)</a>
                        </div>
                    </div>
                )
            })}
            </ul>
        );
    }
}

export default LectureList;