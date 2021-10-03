import React, { Component } from 'react';
import axios from "axios";

export default class LoginUser extends Component{
  constructor(props) {
    super(props);

    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        username: '',
        password: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/user/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          password: response.data.password
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
        username: this.state.username,
        password: this.state.password
    }

        console.log(user);

        if (user.username.equals(this.props.match.params.username) === 0 && user.password.localeCompare(this.props.match.params.username) === 0 ){
          window.location = '/edit-user/' + this.props.match.params.id;
          console.log("hi");
        }
    }

  
  render() {
    return (
      <div>
        <h3>Edit User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}>
            </input>
          </div>
          <div className="form-group"> 
            <label>Password: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.password}
                onChange={this.onChangePassword}>
            </input>
          </div> 
          <div className="form-group">
                <input type="submit" value="Login" className="btn btn-primary" />
          </div>   
        </form>
      </div>
      )
    }

}


