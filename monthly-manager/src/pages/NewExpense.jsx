import Axios from 'axios'
import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

export default class NewExpense extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      category: '',
      amount: 0,
      userid: '',
      redirect: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }
  handleNumber = (event) => {
    this.setState({[event.target.id]: event.target.valueAsNumber})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    Axios.post('http://localhost:8000/api/v1/budget/', {
      name: this.state.name,
      category: this.state.category,
      amount: this.state.amount,
      userid: sessionStorage.id
    })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
    .then(() => {
      this.setState({
        redirect: true,
      })
    })
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to='/overview' />
    }
    return (
      <div>
        <h1>You reached me!</h1>
        <Link to='/overview'>
          take me back
        </Link>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor='name'>Expense Name</label>
        <input
          type='text'
          name='name'
          id='name'
          onChange={this.handleChange}/><br />
        <label htmlFor='name'>Category</label>
        <input
          type='text'
          name='category'
          id='category'
          onChange={this.handleChange}/><br />
        <label htmlFor='name'>Amount</label>
        <input
          type='number'
          name='amount'
          id='amount'
          onChange={this.handleNumber}/><br />
        <input type='submit' value='Submit'/>
        </form>
      </div>
    )
  }
}
