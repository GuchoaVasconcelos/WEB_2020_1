import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Create from './Components/Create'
import List from './Components/List'
import Edit from './Components/Edit'
import Home from './Components/Home'


export default class App extends Component {
  
  render() {
    return (
      <Router>
        <div className='container'>
          <nav className="navbar navbar-expand-lg navbar-light-bg-light">
            <Link to={'/'} className="  ">NETFLIX</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/list'} className="nav-link">List</Link>
                </li>
              </ul>
            </div>
          </nav>
          <h2>Projeto CRUD</h2>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/create" component={Create} />
            <Route path="/edit" component={Edit} />
            <Route path="/list" component={List} />
  
          </Switch>
        </div>
      </Router>
    )
  }
}