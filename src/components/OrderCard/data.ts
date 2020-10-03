import { IOrder, IPayment, IItem } from 'graphql/types'
import { formatAddress, formatMoney, pendingAmount } from 'utils'

interface IGetCardData {
  type?: 'items' | 'payments' | undefined
  title: string
  fieldValue?: string | number | IItem[]
  itemsData?: IItem[]
  paymentsData?: IPayment[]
}
export const getCardData = (
  order: IOrder,
  cardType: 'basic' | 'detailed'
): IGetCardData[] => {
  if (cardType === 'detailed') {
    return [
      {
        title: 'Id do pedido:',
        fieldValue: order.reference,
      },
      {
        title: 'Nome do lojista:',
        fieldValue: order.store,
      },
      {
        title: 'Nome do cliente:',
        fieldValue: order.customer.name,
      },
      {
        title: 'Endereço do cliente:',
        fieldValue: formatAddress(
          order.address.street,
          order.address.number,
          order.address.neighborhood,
          order.address.complement,
          order.address.city,
          order.address.state
        ),
      },
      {
        type: 'items',
        title: 'Itens do pedido:',
        itemsData: order.items,
      },
      {
        title: 'Valor total dos items (Frete não incluso):',
        fieldValue: formatMoney(order.amount),
      },
      {
        title: 'Valor do frete:',
        fieldValue: formatMoney(order.deliveryFee),
      },
      {
        title: 'Valor Total (Frete incluso):',
        fieldValue: formatMoney(order.amount + order.deliveryFee),
      },
      {
        title: 'Valor pendente:',
        fieldValue: pendingAmount(
          order.amount,
          order.deliveryFee,
          order.payments
        ),
      },
      {
        type: 'payments',
        title: 'Lista de pagamentos:',
        paymentsData: order.payments,
      },
    ]
  }

  return [
    {
      title: 'Id do pedido:',
      fieldValue: order.reference,
    },
    {
      title: 'Nome do lojista:',
      fieldValue: order.store,
    },
    {
      title: 'Nome do cliente:',
      fieldValue: order.customer.name,
    },
    {
      title: 'Valor Total (Frete incluso):',
      fieldValue: formatMoney(order.amount + order.deliveryFee),
    },
    {
      title: 'Valor pendente:',
      fieldValue: pendingAmount(
        order.amount,
        order.deliveryFee,
        order.payments
      ),
    },
  ]
}
