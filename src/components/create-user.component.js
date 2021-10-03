import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUsers extends Component {
    constructor(props) {
        super(props);
    
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSetRoom = this.onSetRoom.bind(this);
        this.onSetPassword = this.onSetPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          username: '',
          room: '',
          password: '',
          where: []
        }
      }

      onChangeUsername(e) {
        this.setState({
          username: e.target.value
        })
      }

      onSetRoom(e) {
        this.setState({
          room: e.target.value
        })
      }

      onSetPassword(e) {
        this.setState({
          password: e.target.value
        })
      }
   
      onSubmit(e) {
        e.preventDefault();
    
        const user = {
          username: this.state.username,
          password: this.state.password,
          room: this.state.room
        }

        console.log(user);

        axios.post('http://localhost:3000/users/add', user)
            .then(res => console.log(res.data));

        this.setState({
            username: '',
            password: '',
            room: ''
    })
  }



    render() {
        return (
            
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
                <label>Username: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    />
            </div>
            <div className="form-group">
                <label>Password: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.password}
                    onChange={this.onSetPassword}
                    />
            </div>
            <div className="form-group">
                <label>Group: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.room}
                    onChange={this.onSetRoom}
                    />
            </div>
            <div className="form-group">
             <input type="submit" value="Create User" className="btn btn-primary" />
            </div>
        </form>
        </div>
        )
    }
}