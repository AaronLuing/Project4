import React, { Component } from 'react'
import Login from '../components/Login'
import Register from '../components/Register'

export default class Startup extends Component {
  render() {
    return (
      <div>
        <h3>New User?</h3>
        <Register />
        <h3>Already a User?</h3>
        <Login />
      </div>
    )
  }
}
