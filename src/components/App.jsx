import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import SingleFilm from './SingleFilm';
import Films from './Films';
import People from './People';
import SinglePerson from './SinglePerson';


export class App extends Component {
  render() {
    return (
      <div className="container">
        <Fragment>

          <h1>Studio Ghibli Films</h1>

          <Router>
            <Fragment>
              <div className="btn-field">
                <Link to="/"> <button type="button" className="btn-sm btn-danger">Home</button></Link>
                <Link to="/films"><button type="button" className="btn-sm btn-primary">Films</button></Link>
                <Link to="/people"><button type="button" className="btn-sm btn-primary">People</button></Link>
              </div>

              <Switch>
                <Route exact path="/films/:id" component={SingleFilm} />
                <Route exact path="/films" component={Films} />
                <Route exact path="/people" component={People} />
                <Route exact path="/people/:id" component={SinglePerson} />
              </Switch>
            </Fragment>
          </Router>
        </Fragment>
      </div>
    )
  }
}

export default App
