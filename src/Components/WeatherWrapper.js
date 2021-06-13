import React from 'react';
import '../Styles/WeatherWrapper.css';
import CurrentCityDisplay from './CurrentCityDisplay';
import CurrentWeatherDisplay from './CurrentWeatherDisplay';

class WeatherWrapper extends React.Component{

    render(){

        const { temperature, minTemp, maxTemp, humidity, pressure, windSpeed, sunrise, sunset, weatherDesc, weatherIcon } = this.props;

        return(

            <div id="weather-wrapper">
                
                <CurrentCityDisplay />
                
                <CurrentWeatherDisplay

                temperature = {temperature}
                minTemp = {minTemp}
                maxTemp = {maxTemp}
                humidity = {humidity}
                pressure = {pressure}
                windSpeed = {windSpeed}
                sunrise = {sunrise}
                sunset = {sunset}
                weatherDesc = {weatherDesc}
                weatherIcon = {weatherIcon}

                />

            </div>
        );
    }
}

export default WeatherWrapper;