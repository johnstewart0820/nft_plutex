import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from 'pages/Home/Home'
import Presale from 'pages/Presale/Presale'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/presale" component={Presale} />
      </Switch>
    </Router>
  )
}

export default Routes
