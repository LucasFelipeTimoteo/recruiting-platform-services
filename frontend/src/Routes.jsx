import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

import Register from './pages/Register'
import Recipes from './pages/Recipes'
import Standby from './pages/Standby'
import Complements from './pages/Complements'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/recipes">
          <Recipes />
        </Route>
        <Route path="/complements">
          <Complements />
        </Route>
        <Route path="/standby">
          <Standby />
        </Route>

        <Redirect from="*" to="/register" />
      </Switch>
    </Router>
  )
}
