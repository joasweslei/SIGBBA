import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './home'
import { AlimentBasketList } from './AlimentBasket/List'
import { AlimentBasketForm } from './AlimentBasket/Form'
import OrderList from './orderList'
import FarmerList from './farmer/List'
import Farmerfrom from './farmer/Form'
import { Login } from './auth/Login'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/aliment-basket" exact component={AlimentBasketList} />
      <Route path="/aliment-basket/form" exact component={AlimentBasketForm} />

      <Route path="/pedidos" exact component={OrderList} />
      
      <Route path="/farmer" exact component={FarmerList} />
      <Route path="/farmer/form" exact component={Farmerfrom} />
      <Route path="/login" exact component={Login} />
    </Switch>
  )
}

export default Routes
