import React, { Component } from 'react'
import Overview from './components/Overview'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Monthly Manager</h1>
        <Overview />
      </div>
    )
  }
}

