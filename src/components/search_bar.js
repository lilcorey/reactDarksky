import React, { Component } from 'react';

import axios from 'axios';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { 
      latlong: '',
      address: '',
      cityname: '',
  
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getGeocode() {
    const geoApi = process.env.REACT_APP_GEO_API_KEY;
    const GEO_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.cityname}&key=${geoApi}`;
    axios.get(GEO_URL).then( resp => {
      const {lat, lng} = resp.data.results[0].geometry.location;

      this.setState({latlong: lat+','+lng,
                     address: resp.data.results[0].formatted_address},
                    () => this.props.onSearchTermChange(this.state))
    }).catch(err => {console.log("err fetching latLong")});

  }
  onInputChange(event) {
    this.setState({cityname: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getGeocode();
  }

  render() {
    return(
      <div className="search-bar">
        <form className="input-group" onSubmit={this.handleSubmit}>
        <input className="form-control" type="text" value={this.state.cityname} onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="submit">Search</button>
        </span>
       </form>
      </div>
    );
  }
}

export default SearchBar;