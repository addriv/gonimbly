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
   
  updateRobot(property) {
    return (event) => {
      this.setState({ [property]: event.target.value });
    };
  }

  render() {
    const { name, type, width, height, background } = this.state;
    const uri =  `https://robohash.org/${name}?set=set${type}&size=${width}${height}&bgset=bg${background}`;
    
    return (
      <div className="robot-component">
        <input type="text" placeholder="John Doe" value={this.state.name}
        <input type="range" value={this.state.width} min="100" max="500" onChange={this.updateRobot('width')} />
        <input type="text" value={this.state.width} min="100" max="500" onChange={this.updateRobot('width')} />
        <input type="range" value={this.state.height} min="100" max="500" onChange={this.updateRobot('height')} />
        <input type="text" value={this.state.height} min="100" max="500" onChange={this.updateRobot('width')} />
        <img alt="robot" src={this.uri}/>
      </div>
    );
  }
}

export default App;
