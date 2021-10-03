import React, { Component } from 'react';
import axios from "axios";

export default class CreatePlaces extends Component {
    constructor(props) {
        super(props);

        this.onChangeGroupName = this.onChangeGroupName.bind(this);
        this.onSetPassword = this.onSetPassword.bind(this);
        this.onAppendGroupList = this.onAppendGroupList.bind(this);
        this.onAppendPlaceList = this.onAppendPlaceList.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            groupname: '',
            password: '',
            grouplist: [],
            placelist: []
        }
    }

    
    onChangeGroupName(e) {
        this.setState({
            groupname: e.target.value
        })
    }    
    
    onSetPassword(e) {
        this.setState({
            password: e.target.value
        })
    }  
    
    
    onAppendGroupList(e) {
        this.setState({
            myArray: [...this.state.myArray, e.target.value] 
        })
    }        

    
    onAppendPlaceList(e) {
        this.setState({
            myArray: [...this.state.myArray, e.target.value]
        })
    } 
    
    onSubmit(e) {
        e.preventDefault();
    
        const group = {
            groupname: this.state.groupname,
            password: this.state.password,
            grouplist: this.state.grouplist,
            placelist: this.state.placelist
        }

        console.log(group);

        axios.post('http://localhost:3000/places/add', group)
            .then(res => console.log(res.data));

        window.location = ''
    }

    render(){
        return(
            <div>
                    <h3>Create New Group</h3>
                    <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                            <label> Group Name:</label>
                            <input 
                                type = "text"
                                required
                                className="form-control"
                                value={this.state.groupname}
                                onChange={this.onChangeGroupName}
                                />
                        </div>
                        <div className="form-group">
                            <label> Passwords:</label>
                            <input 
                                type = "text"
                                required
                                className="form-control"
                                value={this.state.onSetPassword}
                                onChange={this.onSetPassword}
                                />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Create Group" className="btn btn-primary" />
                        </div>
                    </form>   
            </div>
        )
    }
}