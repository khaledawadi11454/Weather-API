
import React, { Component } from "react";
// import Search from "./components/Search";
// import SayHi, { SayHello } from "./components/WeatherItem";
// import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

import mostlyCloudy from "./img/weather-icons/mostlycloudy.svg";
import clear from "./img/weather-icons/clear.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "khaled awad"
    };
  }
  handleInputChange = value => {
    this.setState({ name: value });
  };
  render() {
    return (
      <div className="app">
        {/* <SayHi />
        <SayHello color="black" name={this.state.name} />
      </div>
      <Search handleInput={this.handleInputChange} /> */}
        <header className="app__header">
          <div className="Search__bar">
            <input className="Search__input" type="text" placeholder="city name"/>
            <button className="Search__button">Find Weather</button>
          </div>
        </header>
      <main className="main">
          <div className="current__weather">
            <div className="current__style">
              <img className="current__image" src={mostlyCloudy} alt="cloudy"/>
              <div className="current__status">
                <div className="description">Overcast Clouds</div>
                <div className="temperature">
                  <span className="temperature__title">Temperature</span>
                  <span className="temperature__value">10&#176; to 11&#176;C</span>
                </div>
                <div className="humidity">
                  <span className="humidity__title">Humidity</span>
                  <span className="humidity__value">78%</span>
                  <span className="pressure__title">Pressure</span>
                  <span className="pressure__value">10008.48</span>
                </div>
              </div>
            </div>
          </div>
          <div className="days__status">
            <div className="days__style">
              <div className="days">
                <time>03:00</time>
                <img className="days__img" src={mostlyCloudy} alt="cloudy"/>
                <p>8&#176;C</p>
              </div>
              <div className="days">
              <time>06:00</time>
              <img className="days__img" src={mostlyCloudy} alt="cloudy"/>
              <p>9&#176;C</p>
              </div>
              <div className="days">
              <time>09:00</time>
              <img className="days__img" src={clear} alt="clear"/>
              <p>14&#176;C</p>
              </div>
              <div className="days">
              <time>12:00</time>
              <img className="days__img" src={clear} alt="clear"/>
              <p>17&#176;C</p>
              </div>
              <div className="days">
              <time>15:00</time>
              <img className="days__img" src={clear} alt="clear"/>
              <p>18&#176;C</p>
              </div>
              <div className="days">
              <time>18:00</time>
              <img className="days__img" src={clear} alt="clear"/>
              <p>16&#176;C</p>
              </div>
              <div className="days">
                <time>21:00</time>
                <img className="days__img" src={mostlyCloudy} alt="cloudy"/>
                <p>13&#176;C</p>
              </div>
              </div>

            </div>
      </main>
      </div>
    );
  }}
  export default App;
