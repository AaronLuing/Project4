import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

// knowledge on how to add values for total from 
// https://stackoverflow.com/questions/54121602/displaying-the-sum-of-values-in-react-jsx/54121633

export default class Overview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expenses: [],
      budget: '',
      logout: null,
      deleted: false
    }
  }
  componentDidMount() {
    let storage = []
    axios.get('http://localhost:8000/api/v1/budget/')
    .then(res => {
      console.log(res.data.data)
      res.data.data.map((item) => {
        console.log(item)
        if(item.userid == sessionStorage.id){
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

  logOut() {
    axios.get('http://localhost:8000/user/logout')
    .then(() => {
      this.setState({
        logout: true,
      })
    })
  }

  deleteExpense(id) {
    // event.preventDefault()
    axios.delete('http://localhost:8000/api/v1/budget/' + id)
    .then(() => {
      this.setState({
        deleted: true
      })
    })
  }

  updateRoute() {
    <Redirect to='/update' />
  }

  render() {
    if(this.state.logout === true) {
      return <Redirect to='/' />
    }
    if(this.state.deleted === true) {
      window.location.reload(true)
    }
    return (
      <div>
    <h3>Welcome, {sessionStorage.username}</h3>
    <button onClick={this.logOut.bind(this)}>Log Out</button>
    <Link to='/newexpense'>
      <h4>Add an expense</h4>
    </Link>
    <h5>{this.state.expenses.name}</h5>
        <h4>
          You are currently spending 
          ${this.state.expenses.reduce((totalAmount, expense) => totalAmount + expense.amount, 0)} a month
        </h4>

        <ul>
          {this.state.expenses.map((expense) =>
          <li key={expense.id}>
            {expense.name} | ${expense.amount} | 
            <button onClick={this.deleteExpense.bind(this, expense.id)}>Delete Item</button>
          </li>
          )}
        </ul>
      </div>
    )
  }
}

