import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Robot',
      set: 1,
      width: 100,
      height: 100,
      background: 0
    };
  }
   
  updateRobot(property) {
    return (event) => {
      this.setState({ [property]: event.target.value });
    };
  }

  nameError() {
    return (
      <div className="name-error">Your robot needs a name!</div>
    );
  }

  render() {
    const { name, set, width, height, background } = this.state;
    const uri =  `https://robohash.org/${name}?set=set${set}&size=${width}x${height}&bgset=bg${background}`;

    return (
      <div className="robot-component">
        <input type="text" placeholder="John Doe" value={this.state.name} onChange={this.updateRobot('name')}/>
        <select onChange={this.updateRobot('set')}>
          <option value="0" default>None</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <input type="range" value={this.state.width} min="100" max="500" onChange={this.updateRobot('width')}/>
        <input type="number" value={this.state.width} min="100" max="500" onChange={this.updateRobot('width')}/>
        <input type="range" value={this.state.height} min="100" max="500" onChange={this.updateRobot('height')}/>
        <input type="number" value={this.state.height} min="100" max="500" onChange={this.updateRobot('width')}/>
        <select onChange={this.updateRobot('background')}>
          <option value="0" default>None</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        {this.state.name === '' ? this.nameError() :  <img alt="robot" src={uri}/>}
      </div>
    );
  }
}

export default App;
