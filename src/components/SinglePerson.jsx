import React, { Component } from 'react';


class SinglePerson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {}
    }
  }

  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(person => this.setState({ person }))
      .catch(err => console.log(err));
  }

  // loadSpecies(){
  //   fetch(`${this.props.match.params.id}`).then(res=>console.log(res))
  // }

  render() {
    return (
      <div id="card">
        <div key={this.state.person.id}>
          <h3>Eyes: {this.state.person.eye_color}</h3>
          <h4>Gender: {this.state.person.gender}</h4>
          <h5>Age: {this.state.person.age}</h5>
        </div>
      </div>
    )
  }
}

export default SinglePerson
