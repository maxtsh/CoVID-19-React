import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const time = new Date();

    return (
        <footer>
            <div className="info">
                <h1>CoronaVirus Online Statistics <span>By Max Tsh V1.0.0</span></h1>
                <p>All Rights Reserved @ {time.getFullYear()}</p>
            </div>
            <div className="author">
                <Link to="#">
                    <img src={require('../../images/White_Intro.png')} alt=""/>
                </Link>
                <ul>
                    <li><a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/maxtsh/">Instagram</a></li>
                    <li><a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/realmaxtsh/">Facebook</a></li>
                    <li><a rel="noopener noreferrer" target="_blank" href="https://twitter.com/Max_tsh">Twitter</a></li>
                    <li><a rel="noopener noreferrer" target="_blank" href="https://github.com/maxtsh">Github</a></li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer;
