import React from 'react'
import { Card, Text } from 'rebass'
import { menuDate } from '../data/menu'
import { User } from '../data/user'

interface titleProps {
  errorMsg: string | null
  user: User | null
}

const Title = (props: titleProps): JSX.Element => {
  const { errorMsg, user } = props

  const ErrorMsg = !user && (
    <Text mb={3} color="red">
      {errorMsg}
    </Text>
  )
  return (
    <Card mx={2}>
      <Text color="primaryDark" fontSize="4" fontWeight="bold">
        Din Ben Ton
      </Text>
      <Text mb={3} color="black">
        Menu Date: {menuDate.from} - {menuDate.to}
      </Text>
      {ErrorMsg}
    </Card>
  )
}
export default Title
