import React, { useState, useEffect } from 'react';
import '../Styles/CurrentCityDisplay.css';
import logo from '../Assets/favicon.ico';

const CurrentCityDisplay = () => {

    var [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {

        var timer = setInterval(() => setCurrentTime(new Date()), 1000);

        return function cleanUp(){
            clearInterval(timer);
        }

    });

    return(
        <main id="header">
            <div id="current-city-display">
                <span id="city-name">Banglore, India</span>
                <span id="city-date-time">{`${String(currentTime).substring(0, 25)}`}</span>
            </div>

            <img src={logo} alt="logo"/>
        </main>
    );
}

export default CurrentCityDisplay;