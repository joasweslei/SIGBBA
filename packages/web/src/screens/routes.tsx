import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './home'
import DonationOrder from './donationOrder'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Doacoes" exact component={DonationOrder} />
    </Switch>
  )
}

export default Routes
