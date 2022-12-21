import React, { Component } from "react";
import CurrentWeather from "./CurrentWeather";
import DailyWeather from "./DailyWeather";


class Content extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <main className="main">
                
                <CurrentWeather img={this.props.data[0].weather[0].main.toLowerCase()} maxT={this.props.data[0].main.temp_max} minT={this.props.data[0].main.temp_min} press={this.props.data[0].main.pressure} humid={this.props.data[0].main.humidity} desc={this.props.data[0].weather.description} />
                <DailyWeather other={this.props.data.slice(1,8)} />
            </main>
        )
    }
}

export default Content;