import React from 'react'
import { Order } from './types'
import { Card, Text } from 'rebass'

interface OrderListProps {
  orders: Order[]
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
      {orders.map((o, index) => {
        return o.bento ? (
          <Text key={`o-${index}`}>
            {o.userName} {o.company}-{o.bento.name} X 1
          </Text>
        ) : (
          <Text key={`o-${index}`} color="primaryDark">
            {o.userName} 今天跳過
          </Text>
        )
      })}
    </Card>
  )
}
export default OrderList
