import React, { Component } from 'react';
import '../stylesheets/robot.css';

export default class Robot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Robot Joe',
      type: 1,
      width: 300,
      height: 300,
      background: 0
    };
  }

  onChangeUpdateRobot(property) {
    return (event) => {
      this.setState({ [property]: event.target.value });
    };
  }

  render() {
    const { name, type, width, height, background } = this.state;
    const uri = `https://robohash.org/${name}?set=set${type}&size=${width}x${height}&bgset=bg${background}`;
    const nameError = <div id="name-error">Your robot needs a name!</div>;
    const robot = <img alt="robot" src={uri} />;

    return (
      <div id="robot-component">
        <div id="left-panel">
          <div id="user-controls">
            <div id="name">
              <label>Name</label>
              <input
                type="text"
                placeholder="Required..."
                value={this.state.name}
                onChange={this.onChangeUpdateRobot('name')}
              />
            </div>

            <div id="dimensions">
              <div className="dimension">
                <label id="width">Width</label>
                <div className="dimension-controls">
                  <input
                    className="dimension-slider"
                    type="range"
                    value={this.state.width}
                    min="100" max="500"
                    onChange={this.onChangeUpdateRobot('width')}
                  />
                  <input
                    className="dimension-number"
                    type="number"
                    value={this.state.width}
                    min="100" max="500"
                    onChange={this.onChangeUpdateRobot('width')}
                  />
                </div>
              </div>

              <div className="dimension">
                <label id="height">Height</label>
                <div className="dimension-controls">
                  <input
                    className="dimension-slider"
                    type="range"
                    value={this.state.height}
                    min="100"
                    max="500"
                    onChange={this.onChangeUpdateRobot('height')}
                  />
                  <input
                    className="dimension-number"
                    type="number"
                    value={this.state.height}
                    min="100"
                    max="500"
                    onChange={this.onChangeUpdateRobot('width')}
                  />
                </div>
              </div>
            </div>

            <div id="type">
              <label>Type</label>
              <select onChange={this.onChangeUpdateRobot('type')}>
                <option value="1" default>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <div id="background">
              <label>Background</label>
              <select onChange={this.onChangeUpdateRobot('background')}>
                <option value="0" default>None</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
        </div>

        <div id="right-panel">
          {this.state.name === '' ? nameError : robot}
        </div>
      </div>
    );
  }
}
