import React, { Component } from 'react'
import axios from 'axios'


export default class Overview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expenses: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:8000/api/v1/budget/')
    .then(res => {
      console.log(res.data.data)
      this.setState({expenses: res.data.data})
    })
  }

  render() {
    return (
      <div>
        <h3>Your Monthly Expenses</h3>
        <ul>
          {this.state.expenses.map((expense) =>
          <li key={expense.id}>
            {expense.name} | {expense.amount}
          </li>
          )}
        </ul>
      </div>
    )
  }
}
