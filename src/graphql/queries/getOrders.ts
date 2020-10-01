const GET_ORDERS = /* GraphQL */ `
  query GET_ORDERS {
    orders {
      reference
      externalReference
      amount
      deliveryFee
    }
  }
`

export default GET_ORDERS
