import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <img className="virus-logo" src={require('../../images/virus.jpg')} alt=""/>
                <h1 className="title">CoViD-19 Updates & Statistics <span className="live">Live</span> </h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a rel="noopener noreferrer" target="_blank" href="https://www.cdc.gov/coronavirus/2019-nCoV/index.html">About</a></li>
                    <li><a rel="noopener noreferrer" target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">Symptoms</a></li>
                    <li><a rel="noopener noreferrer" target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html">Protection</a></li>
                </ul>
            </nav>
        </header>
    )
};
export default Header;