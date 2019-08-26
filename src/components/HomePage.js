import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class Homepage extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/LilUziVert">Lil Uzi Vert</Link>
          </li>
          <li>
            <Link to="/LilBaby">Lil Baby</Link>
          </li>
          <li>
            <Link to="/PoloG">Polo G</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Homepage
