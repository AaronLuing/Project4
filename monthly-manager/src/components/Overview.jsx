import React, { Component } from 'react'
import axios from 'axios'

// knowledge on how to add values for total from 
// https://stackoverflow.com/questions/54121602/displaying-the-sum-of-values-in-react-jsx/54121633

export default class Overview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expenses: [],
      budget: ''
    }
  }
  componentDidMount() {
    let storage = []
    axios.get('http://localhost:8000/api/v1/budget/')
    .then(res => {
      console.log(res.data.data)
      res.data.data.map((item) => {
        console.log(item.profile.id)
        if(item.profile.id == sessionStorage.id){
          console.log("Yippee!")
          storage.push(item)
          return
        }
      })
    })
    .then(() => {
      this.setState({expenses: storage})
    })
  }

  render() {
    return (
      <div>
    <h3>Welcome, {sessionStorage.username}</h3>
    <h5>{this.state.expenses.name}</h5>
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
