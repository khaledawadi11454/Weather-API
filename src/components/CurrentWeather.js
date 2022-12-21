import React, { Component } from "react";
import mostlyCloudy from "../img/weather-icons/mostlycloudy.svg";
import clouds from '../img/weather-icons/cloudy.svg'
import drizzle from '../img/weather-icons/drizzle.svg'
import clear from '../img/weather-icons/clear.svg'
import rain from '../img/weather-icons/rain.svg'
import storm from '../img/weather-icons/storm.svg'

import "../App.css";
class currentWeather extends React.Component {
  constructor(props){
    super(props);
    this.state={
      icons:{
      clear:clear,
      storm:storm,
      rain:rain,
      drizzle:drizzle,
      clouds:clouds
      }
  }
  }
  
  render() {
        return (
            <div className="current__weather">
            <div className="current__style">
              <img className="current__image" src={this.state.icons[this.props.img]} alt={this.props.img}/>
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