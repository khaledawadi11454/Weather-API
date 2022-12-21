import React, { Component } from "react";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import storm from "../img/weather-icons/storm.svg";
import unknown from "../img/weather-icons/unknown.svg";
import "../App.css";
class currentWeather extends React.Component {
  constructor(props){
    super(props);

  }
  
  render() {
    const imageSrc = (image) => {
      if (image === "Clouds") return cloudy;
      else if (image === "Clear") return clear;
      else if (image === "Mostlycloudy") return mostlycloudy;
      else if (image === "Partlycloudy") return partlycloudy;
      else if (image === "Snow") return snow;
      else if (image === "Storm") return storm;
      else if (image === "Rain") return rain;
      else if (image === "Fog") return fog;
      else if (image === "Drizzle") return drizzle;
    };
        return (
            <div className="current__weather">
            <div className="current__style">
            <img src={imageSrc(this.props.src)} width="120" height="120" />
              <div className="current__status">
                <div className="description">Overcast Clouds</div>
                <div className="temperature">
                  <span className="temperature__title">Temperature</span>
                  <span className="temperature__value">{Math.round(this.props.minT)} &#176;C to {Math.round(this.props.maxT)} &#176;C</span>
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