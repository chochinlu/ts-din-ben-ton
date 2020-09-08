import React from 'react'
import { Order } from './types'
import { Card, Text } from 'rebass'

interface OrderListProps {
  orders: any
}

const OrderList = (props: OrderListProps): JSX.Element | null => {
  const { orders } = props

  if (orders.length === 0) {
    return null
  }

  return (
    <Card
      bg="gray"
      p={2}
      sx={{
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: 'primaryDark',
        borderRadius: '4px',
      }}
    >
      {Object.keys(orders)
        .sort()
        .map((key) => {
          return orders[key].bento ? (
            <Text key={`o-${key}`}>
              {orders[key].userName} {orders[key].company}-
              {orders[key].bento.name} X 1
            </Text>
          ) : (
            <Text key={`o-${key}`} color="primaryDark">
              {orders[key].userName} 今天跳過
            </Text>
          )
        })}
    </Card>
  )
}
export default OrderList
