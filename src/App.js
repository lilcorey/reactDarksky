import React, { Component } from 'react';
import weatherSvg from './svgs/weather.svg';
import './App.css';
import axios from 'axios';

import SearchBar from './components/search_bar';
import WeatherItem from './components/weatherItem';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dayreport: [],
      latlong: '47.6062,-122.3321',
      address: 'Seattle',
    }

    this.weatherSearch = this.weatherSearch.bind(this);
  }

  componentDidMount() {
    // using the constructors state, load an initial forecast
    this.weatherSearch(this.state)
  }

  weatherSearch(term) {
    // root url is served from package.json as a proxy to avoid CORS
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const FILTER = `?exclude=currently,minutely,hourly`;
    const url = `${process.env.REACT_APP_WEATHER_URL}${API_KEY}/${term.latlong}${FILTER}`;
    axios.get(url).then(response => {
      this.setState( { dayreport: response.data.daily.data,
                       latlong: term.latlong,
                       address: term.address });
    });

  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={weatherSvg} className="App-rainy" alt="rainy" />
          <h1 className="App-title">Welcome to my weather page!</h1>
        </header>

        <p className="App-intro">
          To get started, enter a <code>city, address, state, or zip</code> to see its forecast.
        </p> 

        <SearchBar onSearchTermChange={this.weatherSearch}/>

        <h2>Weather for {this.state.address}</h2>

        <ul className="list-group">
          { this.state.dayreport.slice(0,5).map( day => {
            return(
              <WeatherItem key={day.time} day={day}/>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
