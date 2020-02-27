import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class People extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    }
  }

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/people')
      .then(res => res.json())
      .then(people => this.setState({ people: people }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.people.map(people => {
          return (
            <div id="pplCard"key={people.id}>
              <h1>{people.name}</h1>
              <Link to={`/people/${people.id}`}>More Info</Link>
            </div>
          )
        })}
      </div>
    )
  }
}

export default People
