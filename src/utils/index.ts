import { IPayment } from 'graphql/types'

export const formatMoney = (value: number): string =>
  String(
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    }).format(+value)
  )

export const pendingAmount = (
  amount: number,
  deliveryFee: number,
  payments: IPayment[]
): string => {
  const paid =
    payments.length > 0
      ? [...payments].reduce((acc, cur) => acc + cur.amount, 0)
      : 0
  const total = amount + deliveryFee - paid
  return formatMoney(total)
}
