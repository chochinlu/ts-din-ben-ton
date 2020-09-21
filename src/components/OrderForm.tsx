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
        let alertMessage = ''
        if (order.company && order.bento) {
          alertMessage = `${order.userName} 您的便當 ${order.company} - ${order.bento?.name} 已成功下訂。`
        } else {
          alertMessage = `${order.userName} 您今天跳過`
        }
        alert(alertMessage)
      })
      .catch((e) => console.log(e))

    if (haveAllMemberOrdered(user.id)) {
      sendTodSlack()
    }
  }

  const haveAllMemberOrdered = (userId: string) => {
    if (!orders) {
      return false
    }

    let haveOrderUserList: Set<string> = new Set(Object.keys(orders))
    haveOrderUserList.add(userId)

    const orderCount = Array.from(haveOrderUserList).reduce((total, user) => {
      return users[user] ? total + 1 : total
    }, 0)

    return orderCount === Object.keys(users).length ? true : false
  }

  const formatOrderMsg = () => {
    let ordersMsg2 = Object.keys(orders)
      .filter(key => key !== user.id)
      .map((key) => {
        return orders[key].bento
          ? `${orders[key].userName} ${orders[key].company}-${orders[key].bento.name} X 1`
          : `${orders[key].userName} 今天跳過`
      })

    if (!company && !selectedBento) {
      ordersMsg2.push(`${user.name} 今天跳過`)
    } else {
      ordersMsg2.push(`${user.name} ${company}-${selectedBento?.name} X 1`)
    }

    return '```' + ordersMsg2.sort().join('\n') + '```'
  }

  const sendTodSlack = () => {
    const slackMsg = JSON.stringify({
      text: 'Everyone finish order !',
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: '<@UUFDEF42K> <@UNCL0UC84> <@U0183UHBBE1>\n🚀 Everyone finish order !',
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: formatOrderMsg(),
          },
        },
      ],
    })
    return axios
      .post(
        'https://asia-northeast1-isentropic-tape-250207.cloudfunctions.net/din-ben-ton',
        JSON.stringify({
          text: slackMsg,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
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
