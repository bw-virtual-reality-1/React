import React, { Component } from 'react';
import  axiosWithAuth  from '../utils/axiosWithAuth';
import {Link} from 'react-router-dom'
export class Login extends Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };
    handleChange = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };
login = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post("https://virtual-reality-fundraiser.herokuapp.com/api/login", this.state.credentials)
            .then((res) => {
                 console.log(res.data)      
                window.localStorage.setItem('token', res.data.token);
              
            // window.location.assign('/dashboard')
            })
            .catch((err) => {
                console.log(err);
            });
    };
    render() {
        return (
        <form onSubmit={this.login}>
        <input 
        type='text' 
        name='username' 
        placeholder='username' 
        value={this.state.credentials.username} 
        onChange={this.handleChange} 
        />
        <input 
        type='text' 
        name='password' 
        placeholder='Password' 
        value={this.state.credentials.password} 
        onChange={this.handleChange} 
        />
        <button><Link to='dashboard'>Log In</Link></button>
            </form>
        );
    }
}
export default Login;