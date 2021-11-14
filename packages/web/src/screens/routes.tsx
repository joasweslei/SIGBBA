import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home } from './home'
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
import { EntityBeneficiaryList} from './entity/EntityBeneficiary/List'
import EntityForm from './entity/EntityBeneficiary/Form'
import { AlimentOutputList } from './alimentOutput/List'
import { EntityTransferList} from './entity/EntityTransfer/List'
import { EntitySelection } from './alimentOutput/Wizard/EntitySelection'
import EntityTransferForm from './entity/EntityTransfer/Form'
import { AlimentSelection } from './alimentOutput/Wizard/AlimentSelection'
import { Summary } from './alimentOutput/Wizard/Summary/index';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/aliment-basket" exact component={AlimentBasketList} />
      <Route path="/aliment-basket/form" exact component={AlimentBasketForm} />

      <Route path="/aliment-output" exact component = {AlimentOutputList} />
      <Route path="/aliment-output/entidade" exact component = {EntitySelection} />
      <Route path="/aliment-output/selecao-alimentos" exact component = {AlimentSelection} />
      <Route path="/aliment-output/summary" exact component = {Summary} />

      <Route path="/pedidos" exact component={OrderList} />

      <Route path="/farmer" exact component={FarmerList} />
      <Route path="/farmer/form" exact component={FarmerForm} />
      <Route path="/teste" exact component={DapValidation} />

      <Route path="/login" exact component={Login} />
      <Route path="/user" exact component={User} />
      <Route path="/user/form" exact component={UserForm} />

      <Route path="/family" exact component={FamilyList} />
      <Route path="/family/form" exact component={FormFamily} />
      <Route path="/entity" exact component={EntityBeneficiaryList} />
      <Route path="/entity/form" exact component={EntityForm} />
      <Route path="/entity/transfer" exact component={EntityTransferList} />
      <Route path="/entity/transfer/form" exact component={EntityTransferForm} />
    </Switch>
  )
}

export default Routes
