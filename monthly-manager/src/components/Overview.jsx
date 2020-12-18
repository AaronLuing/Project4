import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'

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
    this.logOut = this.logOut.bind(this)
    this.newExpense = this.newExpense.bind(this)
  }
  componentDidMount() {
    let storage = []
    axios.get('http://localhost:8000/api/v1/budget/')
    // axios.get('https://afternoon-savannah-51133.herokuapp.com/api/v1/budget')
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
    // axios.get('https://afternoon-savannah-51133.herokuapp.com/user/logout')
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
  newExpense() {
    <Redirect to='/newexpense' />
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
    <Button onClick={this.logOut}>Log Out</Button>
    {/* <button onClick={this.logOut.bind(this)}>Log Out</button> */}
    <Link to='/newexpense'>
      <h4>Add an expense</h4>
    </Link>
    <h5>{this.state.expenses.name}</h5>
        <h4>
          You are currently spending 
          ${this.state.expenses.reduce((totalAmount, expense) => totalAmount + expense.amount, 0)} a month
        </h4>

        <ul class="list-group">
          {this.state.expenses.map((expense) =>
          <li key={expense.id} class="list-group-item">
            {expense.name} | ${expense.amount} | 
            <button onClick={this.deleteExpense.bind(this, expense.id)}>Delete Item</button>
          </li>
          )}
        </ul>
      </div>
    )
  }
}

