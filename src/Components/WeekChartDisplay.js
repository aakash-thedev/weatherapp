import React from 'react';
import '../Styles/WeekChartDisplay.css';
import { Bar } from 'react-chartjs-2';

class WeekChartDisplay extends React.Component{

    render(){
        return(

            <div id="chart">
                <Bar
                    data = {{
                        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fr', 'Sat'],
                        datasets: [{
                            label: 'Upcoming days',
                            data: [20, 24, 22, 21, 23, 22, 24],
                            backgroundColor: 'skyblue'
                        }]
                    }}

                    height = {185}
                />
            </div>
        );
    }
}

export default WeekChartDisplay;