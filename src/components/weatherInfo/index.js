import React, { Component } from 'react';

class WeatherInfo extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div className="row">
        <div className="col-md-12">
          {this.props.data.name &&
            <div className="WeatherInfo">
              <h3>City: {this.props.data.name}</h3>
              <h3>Country: {this.props.data.sys}</h3>
              <h3>Temperature: {this.props.data.main.temp}&deg;</h3>
              <h3>Humidity: {this .props.data.main.huidity}%</h3>
              <h3>Description: {this.props.data.weather[0].main}</h3>
            </div>
          }{
            this.props.data.cod === '404' &&
              <h3 className="error"> Error: {this.props.data.message.toUpperCase()}</h3>
          }
        </div>
      </div>
    );
  }
}

export default WeatherInfo;
