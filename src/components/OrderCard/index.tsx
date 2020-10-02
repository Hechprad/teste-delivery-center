import React from 'react'
import { v4 } from 'uuid'

import { formatMoney, pendingAmount } from 'utils'
import { IOrder } from 'graphql/types'

import * as s from './styles'

const OrderCard: React.FC<{ order: IOrder }> = ({
  order: { reference, store, customer, amount, deliveryFee, payments },
  ...rest
}) => {
  const content = [
    {
      title: 'Id do pedido:',
      fieldValue: reference,
    },
    {
      title: 'Nome do lojista:',
      fieldValue: store,
    },
    {
      title: 'Nome do cliente:',
      fieldValue: customer.name,
    },
    {
      title: 'Total (Frete incluso):',
      fieldValue: formatMoney(amount + deliveryFee),
    },
    {
      title: 'Valor pendente:',
      fieldValue: pendingAmount(amount, deliveryFee, payments),
    },
  ]
  return (
    <s.Wrapper {...rest}>
      {content.map(lineContent => (
        <s.HorizontalItem key={v4()}>
          <s.ItemTitle>{lineContent.title}</s.ItemTitle>
          <s.Text>{lineContent.fieldValue}</s.Text>
        </s.HorizontalItem>
      ))}
    </s.Wrapper>
  )
}

export default OrderCard
