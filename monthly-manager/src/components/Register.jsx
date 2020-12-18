import React, { Component } from 'react'
import axios from 'axios'
import{Link, Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap';

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      redirect: false
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:8000/user/register', {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    })
    .then(res => {
      console.log(res.data)
      sessionStorage.setItem('username', res.data.data.username)
      sessionStorage.setItem('id', res.data.data.id)
      sessionStorage.setItem('email', res.data.data.email)
      console.log(sessionStorage)
    })
    .catch(err => {
      console.log(err)
    })
    .then(() => {
      if(sessionStorage.username.length > 0){
        this.setState({
          redirect: true,
          loggedIn: true
        })
        sessionStorage.setItem('loggedIn', 'true')
      } else {
        console.log('user login failed')
      }
    })
  }


  render() {
    if(this.state.redirect === true) {
      return <Redirect to='/overview' />
    } else {
      <Redirect to='/' />
    }
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type='text'
              name='username'
              id='username'
              onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='text'
              name='email'
              id='email'
              onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              name='password'
              id='password'
              onChange={this.handleChange}/>
          </Form.Group>
          <Button
            variant='dark'
            type='submit'>Sign Up</Button>
        </Form>
        {/* <form id='loginform' onSubmit={this.handleSubmit}>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            name='username'
            id='username'
            onChange={this.handleChange}/><br />
          <label htmlFor='email'>Email</label>
          <input 
            type='text'
            name='email'
            id='email'
            onChange={this.handleChange}/><br />
          <label htmlFor='password'>Password</label>
          <input 
            type='text'
            name='password'
            id='password'
            onChange={this.handleChange}/><br />
          <input
            type='submit'
            value='Submit' />
        </form> */}
      </div>
    )
  }
}
