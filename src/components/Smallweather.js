import React from 'react'
export default class Smallweather extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (

                <div className="days">
                    <time>{this.props.time}</time>
                    <img className="days__img" src={this.props.src} alt="cloudy" />
                    <p>{Math.round(this.props.temp-273.15)} &#176;C</p>
                </div>
                )
    }
}