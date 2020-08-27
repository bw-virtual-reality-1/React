import React, { Component } from 'react';
import  axiosWithAuth  from '../utils/axiosWithAuth';
import {Link} from 'react-router-dom'
class SignUp extends Component {
    state = {
        username: '',
        password: '',
        firstname: '',
        lastname: '',
        role: '',
        email:''
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    signup = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post("https://virtual-reality-fundraiser.herokuapp.com/api/register", this.state)
            .then(res =>{
                console.log(res)
            })
      .catch((err) => console.log(err))
    
    };
    render() {
        return (
            <form onSubmit={this.signup}>
                <input type='text' name='username' placeholder='username' value={this.state.username} onChange={this.handleChange} />
                <input type='text' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange} />
                <input type='text' name='firstname' placeholder='firstname' value={this.state.firstname} onChange={this.handleChange} />
                <input type='text' name='lastname' placeholder='lastname' value={this.state.lastname} onChange={this.handleChange} />
                <input type='text' name="email" placeholder="email" value={this.state.email} onChange={this.handleChange}/>
                <label htmlFor="role">Account Type</label>
        <select className='select' name="role" onChange={this.handleChange} value={this.state.role}>
          <option value="">--- Select Account Type ---</option>
          <option value="1">Get Funds</option>
          <option value="2">Give Funds</option>
        </select>
                <button><Link to='/dashboard'>Sign Up</Link></button>
            </form>
        );
    }
}
export default SignUp;