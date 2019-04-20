/* eslint-disable react/no-unused-state */

import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';

export default class App extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(data => this.setState({ beers: data }));
    console.log(this.state);
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}
