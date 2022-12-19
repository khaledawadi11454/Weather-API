import React, { Component } from "react";
import CurrentWeather from "./CurrentWeather";
import DailyWeather from "./DailyWeather";


class Content extends React.Component {
    render() {
        return (
            <main className="main">
                <CurrentWeather />
                <DailyWeather />
            </main>
        )
    }
}

export default Content