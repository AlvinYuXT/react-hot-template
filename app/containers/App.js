import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Word from './Word'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Nav</h2>
          <ul>
            <li><Link to="/addword">addWord</Link></li>
            <li><Link to="/home">Home</Link></li>
          </ul>

          <Route path="/addword" component={Word} />
          <Route path="/home" component={Home} />
        </div>
      </Router>
    )
  }
}

export default App