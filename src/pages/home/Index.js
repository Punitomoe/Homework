import React, { Component } from "react";
import "./Home.css";

class Index extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Exercise</h1>
        <div className="search-bar">
          <input type="search" id="search" name="search"></input>
          <input type="submit"></input>
        </div>
        <img src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif"></img>
      </div>
    );
  }
}

export default Index;