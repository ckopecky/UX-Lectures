import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LectureCard from './LectureCard';
import "../css/LectureList.css";

const LectureList = props => {
    return(
        <div className="lecture-list-container-wrapper">
            <Header headerTitle={props.headerTitle}/>
            <div className="lecture-list-container">
            {props.lectures.map(lecture => {
                return(
                    <LectureCard 
                        key={lecture._id + lecture["Unit Title"]}
                        id={lecture._id}
                        unitTitle={lecture["Unit Title"]}
                        videoTitle={lecture["Video Title"]}
                        website={lecture["Website-URL"]}
                    />
                        )
                    })}
            </div>
            <Footer />
        </div>
        )
    }


export default LectureList;