import React from 'react'
import database from '../firebase/firebase'
import { Button, Card, Text } from 'rebass'
import { Bento } from '../data/menu'
import { User } from '../data/user'
import { todayForFirebase } from '../utils'
import axios from 'axios'

export interface OrderFormProps {
  user: User | null
  company: string | null
  selectedBento: Bento | null
  orders: any | undefined
  users: any | undefined
}

const OrderForm = (props: OrderFormProps): JSX.Element | null => {
  const { user, company, selectedBento, orders, users } = props

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
        alert(
          `${order.userName} 您的便當 ${order.company} - ${order.bento?.name} 已成功下訂。`,
        )
      })
      .catch((e) => console.log(e))

    if (haveAllMemberOrdered(user.id)) {
      sendTodSlack()
    }
  }

  const haveAllMemberOrdered = (userId: string) => {
    let haveOrderUserList: Set<string> = new Set(Object.keys(orders))
    haveOrderUserList.add(userId)

    const orderCount = Array.from(haveOrderUserList).reduce((total, user) => {
      if (users[user]) {
        return total + 1
      }

      return total
    }, 0)

    if (orderCount === Object.keys(users).length) {
      return true
    }

    return false
  }

  const sendTodSlack = () => {
    return axios
      .post(
        'https://hooks.slack.com/services/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',
        JSON.stringify({
          text: 'Everyone finish order !',
        }),
      )
      .then((res) => {
        console.log(res)
      })
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
