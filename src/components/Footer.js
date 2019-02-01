import React, { Component } from 'react';
import Slack from '../media/Slack_White.svg';
import LambdaLogo from '../media/lambdaschool.png';
import '../css/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <a className="link-style-footer" href="https://lambdaschoolstudents.slack.com/messages/GCBT8NU6Q/details/" target="_blank" rel="noopener noreferrer"><img src={Slack} alt="slack-logo" /><span>Lambda School - Slack</span></a>
                <a className="link-style-footer"  href="https://learn.lambdaschool.com/syllabus/ux" target="_blank" rel="noopener noreferrer"><img src={LambdaLogo} alt="slack-logo" /><span>Lambda School - Training Kit</span></a>
            </div>
        );
    }
}

export default Footer;