import React from 'react'
import { Button, Card, Text } from 'rebass'
import { Bento } from '../data/menu'
import { User } from '../data/user'

export interface OrderFormProps {
  user: User | null
  company: string | null
  selectedBento: Bento | null
}

const OrderForm = (props: OrderFormProps): JSX.Element | null => {
  const { user, company, selectedBento } = props
  if (!company || !selectedBento || !user) {
    return null
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
      <Button mt={3}>確定下單</Button>
    </Card>
  )
}
export default OrderForm
