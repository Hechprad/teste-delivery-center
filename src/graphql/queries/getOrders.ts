const GET_ORDERS = /* GraphQL */ `
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
