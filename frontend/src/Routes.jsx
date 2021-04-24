import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

import Coffees from './pages/Coffees'
import Register from './pages/Register'
import Standby from './pages/Standby'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/coffees">
          <Coffees />
        </Route>
        <Route path="/standby">
          <Standby />
        </Route>

        <Redirect from="*" to="/register" />
      </Switch>
    </Router>
  )
}
