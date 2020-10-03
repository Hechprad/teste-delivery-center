import React from 'react'
import { v4 } from 'uuid'

import { IOrder } from 'graphql/types'
import { getCardData } from './data'

import * as s from './styles'

const OrderCard: React.FC<{
  order: IOrder
  cardType: 'basic' | 'detailed'
}> = ({ order, cardType = 'basic', ...rest }) => {
  const content = getCardData(order, cardType)
  return (
    <s.Wrapper cardType={cardType} {...rest}>
      {content.map(lineContent => {
        switch (lineContent.type) {
          case 'items':
            return (
              <s.HorizontalItem key={v4()} hasArrayContent>
                <s.ItemTitle>{lineContent.title}</s.ItemTitle>
                {lineContent?.itemsData
                  ? lineContent.itemsData?.map(item => (
                      <s.ItemWrapper key={v4()}>
                        <s.HorizontalItem noMarginTop>
                          <s.ItemTitle>Nome: </s.ItemTitle>
                          <s.Text>{item.name}</s.Text>
                        </s.HorizontalItem>
                        <s.HorizontalItem noMarginTop>
                          <s.ItemTitle>Quantidade: </s.ItemTitle>
                          <s.Text>{item.quantity}</s.Text>
                        </s.HorizontalItem>
                        <s.HorizontalItem noMarginTop>
                          <s.ItemTitle>Valor total: </s.ItemTitle>
                          <s.Text>{item.amount}</s.Text>
                        </s.HorizontalItem>
                      </s.ItemWrapper>
                    ))
                  : null}
              </s.HorizontalItem>
            )
          case 'payments':
            return (
              <s.HorizontalItem key={v4()} hasArrayContent>
                <s.ItemTitle>{lineContent.title}</s.ItemTitle>
                {lineContent?.paymentsData
                  ? lineContent.paymentsData?.map(item => (
                      <s.ItemWrapper key={v4()}>
                        <s.HorizontalItem noMarginTop>
                          <s.ItemTitle>Valor do pagamento: </s.ItemTitle>
                          <s.Text>{item.amount}</s.Text>
                        </s.HorizontalItem>
                        <s.HorizontalItem noMarginTop>
                          <s.ItemTitle>Método de pagamento: </s.ItemTitle>
                          <s.Text>{item.method}</s.Text>
                        </s.HorizontalItem>
                      </s.ItemWrapper>
                    ))
                  : null}
              </s.HorizontalItem>
            )
          default:
            return (
              <s.HorizontalItem key={v4()}>
                <s.ItemTitle>{lineContent.title}</s.ItemTitle>
                <s.Text>{lineContent.fieldValue}</s.Text>
              </s.HorizontalItem>
            )
        }
      })}
    </s.Wrapper>
  )
}

export default OrderCard
