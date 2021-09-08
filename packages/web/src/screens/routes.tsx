import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './home'
import { AlimentBasket } from './AlimentBasket'
import OrderList from './orderList'
import Farmer from './farmer'
import { Login } from './auth/Login'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/aliment-basket" exact component={AlimentBasket} />
      <Route path="/pedidos" exact component={OrderList} />
      <Route path="/farmer" exact component={Farmer} />
      <Route path="/login" exact component={Login} />
    </Switch>
  )
}

export default Routes
