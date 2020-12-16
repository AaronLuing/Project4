import React, { Component } from 'react'
import axios from 'axios'

// knowledge on how to add values for total from 
// https://stackoverflow.com/questions/54121602/displaying-the-sum-of-values-in-react-jsx/54121633

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
        <h4>
          You are currently spending 
          ${this.state.expenses.reduce((totalAmount, expense) => totalAmount + expense.amount, 0)} a month
        </h4>
        <ul>
          {this.state.expenses.map((expense) =>
          <li key={expense.id}>
            {expense.name} | ${expense.amount}
          </li>
          )}
        </ul>
      </div>
    )
  }
}
