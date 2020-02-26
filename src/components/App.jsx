import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import SingleFilm from './SingleFilm';
import Films from './Films';


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
              </div>
              {/* <Link to="/films/:id">Single Film</Link> */}
              <Switch>
                {/* <Route exact path="/" component={App} /> */}
                <Route path="/films/:id" component={SingleFilm} />
                <Route path="/films" component={Films} />
              </Switch>
            </Fragment>
          </Router>
        </Fragment>
      </div>
    )
  }
}

export default App
