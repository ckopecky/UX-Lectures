import React  from 'react';
import LambdaSchool from "../media/lambdaschool.png";
import "../css/Header.css";

const Header = props => {
    console.log(props);
        return (
            <div className="App-header">
                <img className="App-logo" src={LambdaSchool} alt="lambda-school-logo"/>
                <h2>
                {props.headerTitle}
                </h2>

                <img className="App-logo" src={LambdaSchool} alt="lambda-school-logo"/>
            </div>
        );
    }
  
export default Header;