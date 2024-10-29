// App.js
import React, { Component } from 'react';
import Clock from './Clock'; // Import the Clock component

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showClock: true,
    };
  }

  toggleClock = () => {
    this.setState(prevState => ({
      showClock: !prevState.showClock
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleClock}>
          {this.state.showClock ? 'Hide Clock' : 'Show Clock'}
        </button>
        {this.state.showClock && <Clock />}
      </div>
    );
  }
}

export default App;
