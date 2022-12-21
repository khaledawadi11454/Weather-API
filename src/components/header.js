import React, { Component } from "react";

class Header extends React.Component {
    render() {
        return (
            <header className="app__header">
                <div className="Search__bar">
                <input className="Search__input" 
                type="text" 
                placeholder="city name"
                onChange={e => {
             this.setState({ input: e.target.value });
                }}
                />

                <button className="Search__button" onClick={e => this.props.event(this.state.input)}>Find Weather</button>
                </div>
            
            </header>   
        )
    }
}

export default Header