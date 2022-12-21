import React from 'react'
import mostlyCloudy from "../img/weather-icons/mostlycloudy.svg";
import clouds from '../img/weather-icons/cloudy.svg'
import drizzle from '../img/weather-icons/drizzle.svg'
import clear from '../img/weather-icons/clear.svg'
import rain from '../img/weather-icons/rain.svg'
import storm from '../img/weather-icons/storm.svg'
export default class Smallweather extends React.Component {
    constructor(props) {
        super(props)
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

                <div className="days">
                    <time>{this.props.time}</time>
                    <img className="days__img" src={this.state.icons[this.props.desc]} alt={this.props.desc} />
                    <p>{Math.round(this.props.temp-273.15)} &#176;C</p>
                </div>
                )
    }
}