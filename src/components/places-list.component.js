import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Place = props => (
  <tr>
    <td>{props.place.username}</td>
    <td>{props.place.description}</td>
    <td>{props.place.duration}</td>
    <td>{props.place.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.place._id}>edit</Link> | <a href="#" onClick={() => { props.deletePlace(props.place._id) }}>delete</a>
    </td>
  </tr>
)


export default class PlacesList extends Component {
    constructor(props) {
        super(props);
    
        this.deletePlace = this.deletePlace.bind(this)
    
        this.state = {places: []};
      }
    
      componentDidMount() {
        axios.get('http://localhost:3000/places/')
          .then(response => {
            this.setState({ places: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }
    
      deletePlace(id) {
        axios.delete('http://localhost:3000/places/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
            places: this.state.places.filter(el => el._id !== id)
        })
      }
    
      placeList() {
        return this.state.places.map(currentplace => {
          return <Place place={currentplace} deletePlace={this.deletePlace} key={currentplace._id}/>;
        })
      }
    
      render() {
        return (
          <div>
            <h3>Logged Places</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Username</th>
                  <th>Description</th>
                  <th>Duration</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                { this.placeList() }
              </tbody>
            </table>
          </div>
        )
      }
    }