import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Films extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: []
    }
  }

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then(res => res.json())
      .then(films => this.setState({ films: films }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.films.map(film => {
          return (
            <div key={film.id}>
              <h1>{film.title}</h1>
              <Link to={`/films/${film.id}`}>More Info</Link>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Films
