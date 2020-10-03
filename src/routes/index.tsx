import React from 'react'
import { Route, RouteProps, Switch } from 'react-router-dom'

import OrderList from 'pages/OrderList'
import OrderDetails from 'pages/OrderDetails'

const Routes: React.FC<RouteProps> = () => (
  <Switch>
    <Route path="/" exact component={OrderList} />
    <Route path="/pedido/:id" exact component={OrderDetails} />
  </Switch>
)

export default Routes
