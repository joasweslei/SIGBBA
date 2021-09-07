import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './home'
import { AlimentBasket } from './AlimentBasket'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/aliment-basket" exact component={AlimentBasket} />
    </Switch>
  )
}

export default Routes
