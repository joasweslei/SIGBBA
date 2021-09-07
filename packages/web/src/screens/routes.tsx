import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './home'
import { AlimentBasket } from './AlimentBasket'
import DonationOrder from './donationOrder'
import Farmer from './farmer'


const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/aliment-basket" exact component={AlimentBasket} />
      <Route path="/Doacoes" exact component={DonationOrder} />
      <Route path="/Farmer" exact component={Farmer} />
    </Switch>
  )
}

export default Routes
