# Robot Factory

[Heroku App](https://robot-factory.herokuapp.com/)

## Overview

Robot factory is a React application that uses [Robohash](https://robohash.org/) 
API to generate and display robots with specified traits.

<p align="center">
  <img src="https://github.com/addriv/gonimbly/blob/master/public/overview.png" width="600">
</p>

## Implementation

This app was built using a controlled component. All input values are tied to the 
component state. 

**Default State**
````js
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
````

**Example Controlled Input**
````js
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
````

To keep code DRY, a single onChange handler function is used for all inputs. 
As the input values are adjusted by the user, this function updates the state 
and the component re-renders to reflect the update. 

**onChange Handler**
````js
  onChangeUpdateRobot(property) {
    return (event) => {
      this.setState({ [property]: event.target.value });
    };
  }
````