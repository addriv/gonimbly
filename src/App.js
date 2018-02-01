import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: 1,
      width: 100,
      height: 100,
      background: 0
    };
  }
   
  uri() {
    const { name, type, width, height, background } = this.state;
    return `https://robohash.org/${name}?set=set${type}&size=${width}${height}&bgset=bg${background}`;
  }
  
  render() {
    return (
      <div className="robot-component">
        <input type="range" value={this.state.width} min="50" max="400" onChange={this.update("rangeY")} />
        <input type="range" value={this.state.height} min="50" max="400" onChange={this.update("rangeY")} />
        <img alt="robot" src={this.uri}/>
      </div>
    );
  }
}

export default App;
