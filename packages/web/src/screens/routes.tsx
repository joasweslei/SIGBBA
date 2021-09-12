import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home } from './home/index'
import { AlimentBasketList } from './AlimentBasket/List'
import { AlimentBasketForm } from './AlimentBasket/Form'
import { OrderList } from './orderList'
import FarmerList from './farmer/List'
import FarmerForm from './farmer/Form'
import { Login } from './auth/Login'
import FamilyList from './family/List'
//import { CadasterUser } from './auth/CadasterUser'
import { DapValidation } from './home/components/dapValidationList'
import { UserForm } from './auth/User/Form'
import FormFamily from './family/FormFamily'
import { User } from './auth/User/List'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/aliment-basket" exact component={AlimentBasketList} />
      <Route path="/aliment-basket/form" exact component={AlimentBasketForm} />

      <Route path="/pedidos" exact component={OrderList} />
      
      <Route path="/farmer" exact component={FarmerList} />
      <Route path="/farmer/form" exact component={FarmerForm} />
      <Route path="/teste" exact component={DapValidation} />

      <Route path="/login" exact component={Login} />
      <Route path="/user" exact component={User} />
      <Route path="/user/form" exact component={UserForm} />

      <Route path="/family" exact component={FamilyList} />
      <Route path="/family/form" exact component={FormFamily} />
    </Switch>
  )
}

export default Routes
