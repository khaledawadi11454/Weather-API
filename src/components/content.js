import React, { Component } from "react";
import CurrentWeather from "./CurrentWeather";
import DailyWeather from "./DailyWeather";
import fakeWeather from "../data/fakeWeatherData.json"


class Content extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <main className="main">
                
                <CurrentWeather 
                src={this.props.data[0].main}
                 maxT={this.props.data[0].main.temp_max} 
                 minT={this.props.data[0].main.temp_min} 
                 press={this.props.data[0].main.pressure} 
                 humid={this.props.data[0].main.humidity}
                desc={this.props.data[0].weather.description} />
                <DailyWeather other={this.props.data.slice(1,7)} />
            </main>
        )
    }
}

export default Content;