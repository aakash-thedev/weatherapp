import React from 'react';
import '../Styles/CurrentWeatherDisplay.css';
import humidityLogo from '../Assets/icons8-partly-cloudy-day.gif';
import wind from '../Assets/icons8-wind-64.png';
import pressureLogo from '../Assets/icons8-pressure-50.png';
// import sunrisesunset from '../Assets/icons8-sunrise-64.png';
import sunrise from '../Assets/sunrise.png';
import sunset from '../Assets/sunset.png';

const CurrentWeatherDisplay = (props) => {

    const { temperature, maxTemp, minTemp, humidity, pressure, windSpeed } = props;

    return(
        <div id="current-weather-display">
            
            <section id="weather-details">

                <div id="temperature-wrapper">

                    <span id="temperature"> {Math.round(temperature)}°C </span>

                    <div id="min-max">
                        <small className="min-max" id="min">
                            <section>min</section>
                            <section>{Math.round(minTemp)}°C</section>
                        </small>
                        <small className="min-max" id="max">
                            <section>max</section>
                            <section>{Math.round(maxTemp)}°C</section>
                        </small>
                    </div>

                </div>

                <span id="more">
                    <div>
                        <small className="util" id="humidity"><img src={humidityLogo} alt="humidity"/> {humidity}% Humidity</small>
                        <small className="util" id="wind"><img src={wind} alt="wind" /> {windSpeed} m/s wind</small>
                    </div>

                    <div>
                        <small className="util" id="pressure"><img id="pressure-logo" src={pressureLogo} alt="pressure" /> {pressure} hPa</small>
                        <small className="util" id="sunrise-sunset"><img src={sunrise} alt="sunrise" style={{height: '18px'}} />5:53 AM &nbsp;&nbsp; <img src={sunset} alt="sunset" style={{height: '18px'}}/> 6:48 PM</small>
                    </div>
                </span>

                <span id="weather-description-wrapper">

                    {/* <small id="weather-heading">{weather[0].main}</small> */}
                    {/* <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="weather description"></img> */}
                    <small id="weather-heading">Clouds</small>
                    <img src = 'https://cdn0.iconfinder.com/data/icons/ecology-111/1022/clouds-512.png' alt= "weather description"></img>

                </span>

            </section>

        </div>
    );
}

export default CurrentWeatherDisplay;