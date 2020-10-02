import { gql } from '@apollo/client'

const GET_ORDERS = gql`
  query GET_ORDERS {
    orders {
      reference
      store
      customer {
        name
      }
      address {
        number
        neighborhood
        complement
        city
        state
        street
      }
      items {
        name
        amount
        quantity
      }
      amount
      deliveryFee
      payments {
        amount
      }
    }
  }
`

export default GET_ORDERS
