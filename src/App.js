import React, { Component } from 'react'
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import LilUziVert from './components/LilUziVert'
import LilBaby from './components/LilBaby'
import PoloG from './components/PoloG'

class App extends Component {
  render() {
    return (
      <Router>
        <main class="main">
          <h1>Music Madness</h1>
          <Link to="/">HomePage</Link>
          <switch>
            <Route exact path="/" exact component={HomePage}></Route>
            <Route exact path="/LilUziVert" component={LilUziVert}></Route>
            <Route exact path="/LilBaby" component={LilBaby}></Route>
            <Route exact path="/PoloG" component={PoloG}></Route>
          </switch>
        </main>
      </Router>
    )
  }
}

export default App
