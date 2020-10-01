import React from 'react'

import { formatMoney, pendingAmount } from 'utils'
import { IOrder } from 'graphql/types'

import * as s from './styles'

const OrderCard: React.FC<{ order: IOrder }> = ({
  order: { reference, store, customer, amount, deliveryFee, payments },
  ...rest
}) => (
  <s.Wrapper {...rest}>
    <s.HorizontalItem>
      <s.ItemTitle>Id do pedido:</s.ItemTitle>
      <s.Text>{reference}</s.Text>
    </s.HorizontalItem>
    <s.HorizontalItem>
      <s.ItemTitle>Nome do lojista:</s.ItemTitle>
      <s.Text>{store}</s.Text>
    </s.HorizontalItem>
    <s.HorizontalItem>
      <s.ItemTitle>Nome do cliente:</s.ItemTitle>
      <s.Text>{customer.name}</s.Text>
    </s.HorizontalItem>
    <s.HorizontalItem>
      <s.ItemTitle>Total (Frete incluso):</s.ItemTitle>
      <s.Text>{formatMoney(amount + deliveryFee)}</s.Text>
    </s.HorizontalItem>
    <s.HorizontalItem>
      <s.ItemTitle>Valor pendente:</s.ItemTitle>
      <s.Text>{pendingAmount(amount, deliveryFee, payments)}</s.Text>
    </s.HorizontalItem>
  </s.Wrapper>
)

export default OrderCard
