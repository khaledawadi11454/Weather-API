import React, { Component } from "react";
import clear from "../img/weather-icons/clear.svg";
import mostlyCloudy from "../img/weather-icons/mostlycloudy.svg";
import Smallweather from "./Smallweather";

class dailyWeather extends React.Component {
  constructor(props){
    super(props)
  }  
  render() {
    console.log(this.props.data)
        return (
            <div className="days__status">
              <div className="days__style">
              {this.props.other.map(e => <Smallweather key={e.dt_txt} temp={e.main.temp} time={e.dt_txt} src={clear}/>)}
            </div>
            </div>
        )
    }
}

export default dailyWeather