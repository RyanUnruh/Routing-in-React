import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SingleFilm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: []
    }
  }

  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(film => this.setState({ films: film }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div key={this.state.films.id}>
          <h3>{this.state.films.title}</h3>
          <p>{this.state.films.release_date}</p>
          <p>{this.state.films.director}</p>
          <Link to={`/films/${this.state.films.id}`}></Link>
        </div>
        {/* ) */}
        {/* })} */}
      </div>
    )
  }
}

export default SingleFilm
