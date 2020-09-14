import React from 'react'
import database from '../firebase/firebase'
import { Button, Card, Text } from 'rebass'
import { Bento } from '../data/menu'
import { User } from '../data/user'
import { todayForFirebase } from '../utils'

export interface OrderFormProps {
  user: User | null
  company: string | null
  selectedBento: Bento | null
}

const OrderForm = (props: OrderFormProps): JSX.Element | null => {
  const { user, company, selectedBento } = props

  if (!user) {
    return null
  }

  const text =
    !company && !selectedBento ? (
      <Text fontSize={4}>今天跳過</Text>
    ) : (
      <Text fontSize={4}>
        <b>{user.name}</b>: {company}-{selectedBento?.name}
      </Text>
    )

  const handleClick = () => {
    const order = {
      id: user.id,
      company,
      userName: user.name,
      bento: selectedBento,
    }

    // save to db
    // create collection based on yyyyMMdd
    database
      .collection('orders')
      .doc(todayForFirebase)
      .set({ [user.id]: order }, { merge: true })
      .then(() => {
        let alertMessage = ''
        if (order.company && order.bento) {
          alertMessage = `${order.userName} 您的便當 ${order.company} - ${order.bento?.name} 已成功下訂。`
        } else {
          alertMessage = `${order.userName} 您今天跳過`
        }
        alert(alertMessage)
      })
      .catch((e) => console.log(e))
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
      {text}
      <Button mt={3} onClick={handleClick}>
        確定下單
      </Button>
    </Card>
  )
}
export default OrderForm
