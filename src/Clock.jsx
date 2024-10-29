// Clock.js
import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      time: new Date().toLocaleTimeString() 
    };
    console.log('Constructor: Clock component is being constructed');
  }

  componentDidMount() {
    console.log('componentDidMount: Clock component has mounted');
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Clock component has updated');
    console.log('Previous state:', prevState);
    console.log('Current state:', this.state);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Clock component is about to unmount');
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }

  render() {
    console.log('Render: Clock component is rendering');
    return (
      <div>
        <h1>Current Time:</h1>
        <h2>{this.state.time}</h2>
      </div>
    );
  }
}

export default Clock;
