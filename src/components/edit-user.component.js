import React, { Component } from 'react';
import axios from "axios";

export default class EditUser extends Component {
    constructor(props) {
        super(props);

        this.onUpdateWhere = this.onUpdateWhere.bind(this);
        this.onRemoveWhere = this.onRemoveWhere.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            room: '',
            password: '',
            where: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/user/'+this.props.match.params.id)
          .then(response => {
            this.setState({
              username: response.data.username,
              room: response.data.room,
              password: response.data.password,
              where: response.data.where
            })   
          })
          .catch(function (error) {
            console.log(error);
          })
        }

    onUpdateWhere(e) {
        this.setState({ 
          myArray: [...this.state.myArray, e.target.value] 
        })
      }

    onRemoveWhere(index) {
    this.setState({
        data: this.state.data.filter((_, i) => i !== index)
    })
    }

    onSubmit(e) {
        e.preventDefault();
    
        const user = {
            username: this.data.username,
            room: this.data.room,
            password: this.data.password,
            where: this.data.where
        }
    
            console.log(user);
    
            axios.post('http://localhost:3000/users/update' + this.props.match.params.id, user)
                .then(res => console.log(res.data));
    
            window.location = '/';
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
                 />
          </div>
          <div className="form-group"> 
            <label>Password: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.password} />
          </div> 
          <div className="form-group">
                        <input type="submit" value="Login" className="btn btn-primary" />
          </div>   
        </form>
      </div>
      )
    }
}