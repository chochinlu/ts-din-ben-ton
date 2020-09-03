import React, { useEffect, useState } from 'react'
import database from '../firebase/firebase'
import { Order } from './types'
import { Card, Text } from 'rebass'

interface OrderListProps {
  orders: Order[]
}

const OrderList = (props: OrderListProps): JSX.Element | null => {
  // const { orders } = props
  const date =
    new Date().getFullYear().toString() +
    new Date().getMonth().toString() +
    new Date().getDate().toString()
  const [orderList, setOrderList] = useState<Array<any>>([])

  useEffect(() => {
    // connects to db and retrieve collection documents
    // get the orders
    database.collection(date).onSnapshot((snapshot) => {
      setOrderList(snapshot.docs.map((doc) => doc.data()))
    })
  }, [date])

  if (orderList.length === 0) {
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
      {orderList.map((o, index) => (
        <Text key={`o-${index}`}>
          {o.userName} {o.company}-{o.bento.name} X 1
        </Text>
      ))}
    </Card>
  )
}
export default OrderList
