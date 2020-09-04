import React from 'react'
import database from '../firebase/firebase'
import { Button, Card, Text } from 'rebass'
import { Bento } from '../data/menu'
import { User } from '../data/user'
import { Order } from './types'
import { todayForFirebase } from '../utils'

export interface OrderFormProps {
  user: User | null
  company: string | null
  selectedBento: Bento | null
  order: Order | null
  setOrder: (orders: Order) => void
}

const OrderForm = (props: OrderFormProps): JSX.Element | null => {
  const { user, company, selectedBento, order, setOrder } = props

  if (!company || !selectedBento || !user) {
    return null
  }

  const handleClick = () => {
    // const hasOrder = orders.find((o) => o.userName === user.name)
    const order = {
      company,
      userName: user.name,
      bento: selectedBento,
    }

    if (order) {
      setOrder(order)
      // save to db
      // create collection based on yyyymmd
      database
        .collection(todayForFirebase)
        .doc(order.userName)
        .set(order)
        .then(() => {
          alert('Successful')
        })
        .catch((e) => {
          alert(e)
        })
    }
  }

  return (
    <Card
      mt={2}
      mb={2}
      px={2}
      py={3}
      bg="gray"
      sx={{
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: 'primaryDark',
        borderRadius: '4px',
      }}
    >
      <Text fontSize={4}>
        <b>{user.name}</b>: {company}-{selectedBento?.name}
      </Text>
      <Button mt={3} onClick={handleClick}>
        確定下單
      </Button>
    </Card>
  )
}
export default OrderForm
