import React, { Component } from "react";
import Smallweather from './Smallweather'
import mostlyCloudy from "../img/weather-icons/mostlycloudy.svg";
import clouds from '../img/weather-icons/cloudy.svg'
import drizzle from '../img/weather-icons/drizzle.svg'
import clear from '../img/weather-icons/clear.svg'
import rain from '../img/weather-icons/rain.svg'
import storm from '../img/weather-icons/storm.svg'


class dailyWeather extends React.Component {
  constructor(props){
    super(props)
  }  
  render() {
        return (
            <div className="days__status">
              <div className="days__style">
              {this.props.other.map(e => <Smallweather key={e.dt_txt} temp={e.main.temp} time={e.dt_txt} 
                              src={e.weather[0].main}
                              />)}
            </div>
            </div>
        )
    }
}

export default dailyWeather