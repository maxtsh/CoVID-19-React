import React from 'react'
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Countries from '../layouts/Countries';

import useCorona from '../../hooks/useCorona';

const Home = () => {
    const COVID = useCorona();

    if(!COVID){
        return <h1>Loading...</h1>
    }

    return (
        <div className="main-container">
            <Header />
            <div className="wrapper">
                <div className="live-stats">
                    <h1 className="stats-title">COVID-19 World Wide Outbreak Live Statistics</h1>
                    <div className="stats">
                        <div className="total-infect">
                            <h1><span className="infected">Infected:</span> {COVID.confirmed.value}</h1>
                            {/* <p><Link to="#">Details</Link></p> */}
                        </div>
                        <div className="total-death">
                            <h1><span className="death">Death:</span> {COVID.deaths.value}</h1>
                            {/* <p><Link to="#">Details</Link></p> */}
                        </div>
                        <div className="total-recovered">
                            <h1><span className="recover">Recovered:</span> {COVID.recovered.value}</h1>
                            {/* <p><Link to="#">Details</Link></p> */}
                        </div>
                    </div>
                </div>
                <div className="graph">
                    <h1>Global Pandemic Crisis Graph</h1>
                    <img src={COVID.image} alt=""/>
                </div>
                <div className="countries">
                    <Countries />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
