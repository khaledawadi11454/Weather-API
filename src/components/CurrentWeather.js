import React, { Component } from "react";
import mostlyCloudy from "../img/weather-icons/mostlycloudy.svg";
import "../App.css";
class currentWeather extends React.Component {
  constructor(props){
    super(props);
  }  
  render() {
        return (
            <div className="current__weather">
            <div className="current__style">
              <img className="current__image" src={mostlyCloudy} alt="cloudy"/>
              <div className="current__status">
                <div className="description">Overcast Clouds</div>
                <div className="temperature">
                  <span className="temperature__title">Temperature</span>
                  <span className="temperature__value">{Math.round(this.props.minT - 273.15)} &#176;C to {Math.round(this.props.maxT -273.15)} &#176;C</span>
                </div>
                <div className="humidity">
                  <span className="humidity__title">Humidity</span>
                  <span className="humidity__value">{this.props.humid}</span>
                  <span className="pressure__title">Pressure</span>
                  <span className="pressure__value">{this.props.press}</span>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default currentWeather