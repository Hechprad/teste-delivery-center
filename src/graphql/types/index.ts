export interface IOrder {
  reference: number
  store: string
  customer: ICustomer
  address: IAddress
  Items: IItem[]
  amount: number
  deliveryFee: number
  payments: IPayment[]
}

interface ICustomer {
  name: string
}

interface IAddress {
  number: string
  neighborhood: string
  complement: string
  city: string
  state: string
  street: string
}
interface IItem {
  name: string
  amount: string
  quantity: number
  note: string
}
export interface IPayment {
  method: 'CREDIT' | 'DEBIT' | 'ONLINE'
  amount: number
}
