import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NewExpense extends Component {
  render() {
    return (
      <div>
        <h1>You reached me!</h1>
        <Link to='/overview'>
          take me back
        </Link>
      </div>
    )
  }
}
