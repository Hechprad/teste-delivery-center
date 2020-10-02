import React, { useEffect, useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { useHistory, useParams } from 'react-router-dom'

import OrderCard from 'components/OrderCard'

import GET_ORDERS from 'graphql/queries/getOrders'
import { IOrder } from 'graphql/types'

import * as s from './styles'

const OrderDetail: React.FC = () => {
  const history = useHistory()

  const [orderDetail, setOrderDetail] = useState<IOrder | null>()
  const { id } = useParams<{ id: string }>()
  const [getOrders, { loading, error, data }] = useLazyQuery(GET_ORDERS)

  useEffect(() => {
    getOrders()
  }, [getOrders])

  useEffect(() => {
    if (data?.orders.length > 0) {
      data.orders.forEach((order: IOrder) => {
        if (String(order.reference) === id) {
          setOrderDetail(order)
        }
      })
    }
  }, [data, id])

  const displayContent = (): React.ReactNode => {
    if (error && !loading) {
      return <s.Button onClick={() => getOrders()}>tente novamente</s.Button>
    }

    if (!error && loading) {
      return <s.Loading>Carregando...</s.Loading>
    }

    if (orderDetail) {
      return (
        <s.Card>
          <OrderCard order={orderDetail} cardType="detailed" />
        </s.Card>
      )
    }

    return <s.Loading>Carregando...</s.Loading>
  }

  return (
    <s.Section>
      <s.PageTitle>Detalhe do Pedido {id}</s.PageTitle>
      {displayContent()}
      <s.Button
        type="button"
        variant="contained"
        color="primary"
        onClick={() => history.push('/')}
      >
        voltar para lista
      </s.Button>
    </s.Section>
  )
}

export default OrderDetail
