import React from 'react';
import "../css/LectureCard.css";

const LectureCard = (props) => {
    console.log(props, "card");
    return (
        <div key={props.id} className="single-lecture-block">
            <div className="unit-title"><h2>{props.unitTitle}</h2></div>
            <div className="module-title"><h3>{props.videoTitle}</h3></div>
            <div className="website-url-div">
                <a href={props.website} className="website-url" target="_blank" rel="noopener noreferrer" >Lecture Video </a>
            </div>
        </div>
    );
};

export default LectureCard;