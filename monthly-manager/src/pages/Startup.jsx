import React, { Component } from 'react'
import Login from '../components/Login'
import Register from '../components/Register'

export default class Startup extends Component {
  render() {
    return (
      <div>
        <h1>Log In</h1>
        <h3>New User?</h3>
        <Register />
        <h3>Already a User?</h3>
        <Login />
      </div>
    )
  }
}
