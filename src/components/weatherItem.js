import React from 'react';

import WeatherImg from './weatherImg';

class WeatherItem extends React.Component {

  processDate(time) { // convert UNIX date to human readable
    var d = new Date();
    var date = new Date(time*1000 + d.getTimezoneOffset() * 60000);
    var dateSplice = date.toUTCString().split(' ').slice(0,4).join(' ');
    return dateSplice.toString();
  }

  render(){
    const {day} = this.props;
    return(
      <li className="list-group-item" key={day.time}>
        <WeatherImg className="dayimg" summary={day.summary}/>
        <h4>{this.processDate(day.time)}</h4>
        <p> 
          Summary: {day.summary}
        </p>
        <p> 
        High: {Math.round(day.temperatureHigh)}&deg;F | Low: {Math.round(day.temperatureLow)}&deg;F
        </p>

    </li>
    );
  }
}

export default WeatherItem;