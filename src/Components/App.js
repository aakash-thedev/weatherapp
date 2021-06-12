import React from 'react';
import '../Styles/App.css';
import WeatherWrapper from './WeatherWrapper';
import WeekChartDisplay from './WeekChartDisplay';

class App extends React.Component{

    constructor(){
        super();
        this.state = {

            temperature: 0,
            minTemp: 0,
            maxTemp: 0,
            humidity: 0,
            windSpeed: 0,
            sunrise: 0,
            sunset: 0,
            pressure: 0,
            weather: [],

        }
    }

    componentDidMount(){

        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=12.9716&lon=77.5946&exclude=minutely,hourly&units=metric&appid=d5cd266c3ce6c9844e0d65efc6fb7899', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            this.setState({

                temperature: data.current.temp,
                minTemp: data.daily[0].temp.min,
                maxTemp: data.daily[0].temp.max,
                humidity: data.current.humidity,
                windSpeed: data.current.wind_speed,
                sunrise: data.current.sunrise,
                sunset: data.current.sunset,
                pressure: data.current.pressure,
                weather: data.current.weather

            });

        })
        .catch(err => console.log(err));

    }

    render(){

        const { temperature, minTemp, maxTemp, humidity, pressure, windSpeed, sunrise, sunset, weather } = this.state;

        return(

            <div id="app">
                <WeatherWrapper

                    temperature = {temperature}
                    minTemp = {minTemp}
                    maxTemp = {maxTemp}
                    humidity = {humidity}
                    pressure = {pressure}
                    windSpeed = {windSpeed}
                    sunrise = {sunrise}
                    sunset = {sunset}
                    weather = {weather}
                
                />
                <WeekChartDisplay />
            </div>
        );
    }
}

export default App;