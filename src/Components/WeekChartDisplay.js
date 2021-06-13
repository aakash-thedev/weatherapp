import React from 'react';
import '../Styles/WeekChartDisplay.css';
import { Line } from 'react-chartjs-2';

class WeekChartDisplay extends React.Component{

    render(){

        let { upcoming } = this.props;

        let minTempData = [];
        let maxTempData = [];

        console.log(upcoming);

        for(let i=0; i<upcoming.length; i++){

            let currentDay = upcoming[i];
            let minTemp = currentDay.temp.min;

            minTempData.push(minTemp);
        }

        for(let i=0; i<upcoming.length; i++){
            
            let currentDay = upcoming[i];
            let maxTemp = currentDay.temp.max;

            maxTempData.push(maxTemp);
        }

        return(

            <div id="chart">
                <Line id = "line-chart"
                    data = {{
                        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fr', 'Sat'],
                        datasets: [
                            {
                                label: 'Maximum Temperature',
                                data: maxTempData,
                                backgroundColor: 'red',
                                fill: false,
                                borderColor: 'red'
                            },

                            {
                                label: 'Minimum Temperature',
                                data: minTempData,
                                backgroundColor: 'blue',
                                fill: false,
                                borderColor: 'blue'
                            }
                    
                    ]
                    }}

                    options = {{

                        // responsive: true,

                        scales: {
                            x: {
                                display: true,
                                title: {
                                    text: "This Week / Upcoming",
                                    display: true,
                                    padding: {top: 10, left: 0, right: 0, bottom: 0}
                                }
                            },

                            y: {
                                display: true,
                                title: {
                                    text: "Temperature in °C",
                                    display: true,
                                    padding: {top: 0, left: 0, right: 0, bottom: 10}
                                }
                            }
                        }
                    }}

                    // plugins = {{

                    //     title: {
                    //         text: "Weekly Data",
                    //         display: true
                    //     },

                    //     tooltip: {
                    //         backgroundColor: 'blue'
                    //     }
                    // }}

                    height = {178}
                />
            </div>
        );
    }
}

export default WeekChartDisplay;