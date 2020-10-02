import React, { useEffect, useState } from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import { v4 } from 'uuid'

import OrderCard from 'components/OrderCard'

import GET_ORDERS from 'graphql/queries/getOrders'
import { IOrder } from 'graphql/types'

import * as s from './styles'

const OrderList: React.FC = () => {
  const history = useHistory()

  const [getOrders, { loading, error, data }] = useLazyQuery(GET_ORDERS)
  const [ordersList, setOrdersList] = useState<IOrder[] | null>()

  const handleRedirectToDetails = (reference: number): void => {
    history.push(`/pedido/${reference}`)
  }

  useEffect(() => {
    getOrders()
  }, [getOrders])

  useEffect(() => {
    if (data) {
      setOrdersList(data.orders)
    }
  }, [data])

  const displayContent = (): React.ReactNode => {
    if (error && !loading) {
      return <s.Button onClick={() => getOrders()}>tente novamente</s.Button>
    }

    if (!error && loading) {
      return <s.Loading>Carregando...</s.Loading>
    }

    if (ordersList && ordersList.length > 0) {
      return (
        <ul>
          {ordersList?.map(order => (
            <s.Li
              key={v4()}
              onClick={() => handleRedirectToDetails(order.reference)}
            >
              <OrderCard order={order} cardType="basic" />
            </s.Li>
          ))}
        </ul>
      )
    }

    return <s.Loading>Carregando...</s.Loading>
  }

  return (
    <s.Section>
      <s.PageTitle>Lista de Pedidos</s.PageTitle>
      {displayContent()}
    </s.Section>
  )
}

export default OrderList
