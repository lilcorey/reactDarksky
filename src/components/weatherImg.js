import React from 'react';
import rainy from '../svgs/rainy.svg';
import sunny from '../svgs/day.svg';
import weather from '../svgs/weather.svg';
import cloudy from '../svgs/cloudy.svg';

class WeatherImg extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherType: weather,
    }
  }

  componentDidMount() {
    this.renderImage(this.props.summary.toLowerCase())
  }

  renderImage(summary) {
      if(summary.includes('rain')){
        this.setState({weatherType: rainy});
      }
      else if(summary.includes('cloud')){
        this.setState({weatherType: cloudy});
      }
      else if( summary.includes('sun') || summary.includes('clear')){
        this.setState({weatherType: sunny});
      }
      else{
        this.setState({weatherType: weather});
      }
  }

  render(){
    return(
      <div>
        <img src={this.state.weatherType} className="App-rainy" alt="weatherImg" />
      </div>
    );
  }
}

export default WeatherImg;