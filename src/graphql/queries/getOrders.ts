import { gql } from '@apollo/client'

const GET_ORDERS = gql`
  query GET_ORDERS {
    orders {
      reference
      store
      customer {
        name
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
