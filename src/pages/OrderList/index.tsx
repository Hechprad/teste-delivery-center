import React, { useEffect, useState } from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import { v4 } from 'uuid'
import Pagination from '@material-ui/lab/Pagination'

import OrderCard from 'components/OrderCard'

import GET_ORDERS from 'graphql/queries/getOrders'
import { IOrder } from 'graphql/types'

import * as s from './styles'

const OrderList: React.FC = () => {
  const history = useHistory()

  const [getOrders, { loading, error, data }] = useLazyQuery(GET_ORDERS)

  const [totalItems, setTotalItems] = useState(0)
  const [totalPage, setTotalPage] = useState(1)
  const [pageContent, setPageContent] = useState<IOrder[] | null>()
  const [currentPage, setCurrentPage] = useState(1)

  const handleRedirectToDetails = (reference: number): void => {
    history.push(`/pedido/${reference}`)
  }
  const itemsPerPage = 2

  // get orders data
  useEffect(() => {
    getOrders()
  }, [getOrders])

  // set orders data
  useEffect(() => {
    if (data) {
      setPageContent(data.orders)
    }
  }, [data])

  // handle pagination
  useEffect(() => {
    if (data) {
      setTotalItems(data.orders.length)
      setTotalPage(Math.ceil(totalItems / itemsPerPage))

      const totalBackwardPages = currentPage - 1
      const totalOrdersToBeRemoved = itemsPerPage * totalBackwardPages

      setPageContent(
        data.orders.slice(
          totalOrdersToBeRemoved,
          totalOrdersToBeRemoved + itemsPerPage
        )
      )
    }
  }, [currentPage, data, totalItems])

  const handlePaginationChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber)
  }

  const displayContent = (): React.ReactNode => {
    if (error && !loading) {
      return <s.Button onClick={() => getOrders()}>tente novamente</s.Button>
    }

    if (!error && loading) {
      return <s.Loading>Carregando...</s.Loading>
    }

    if (pageContent && pageContent.length > 0) {
      return (
        <>
          <s.Ul>
            {pageContent?.map(order => (
              <s.Li
                key={v4()}
                onClick={() => handleRedirectToDetails(order.reference)}
              >
                <OrderCard order={order} cardType="basic" />
              </s.Li>
            ))}
          </s.Ul>
          <Pagination
            count={totalPage}
            page={currentPage}
            onChange={(e, page) => handlePaginationChange(page)}
          />
        </>
      )
    }

    return <s.Loading>Carregando...</s.Loading>
  }

  return (
    <s.Section>
      <s.PageTitle>Lista de Pedidos</s.PageTitle>
      {displayContent()}
    </s.Section>
  )
}

export default OrderList
