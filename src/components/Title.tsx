import React from 'react'
import { Card, Text } from 'rebass'
import { menuDate } from '../data/menu'

const Title = (): JSX.Element => {
  return (
    <Card mx={2}>
      <Text color="primaryDark" fontSize="4" fontWeight="bold">
        Din Ben Ton
      </Text>
      <Text mb={3} color="black">
        Menu Date: {menuDate.from} - {menuDate.to}
      </Text>
    </Card>
  )
}
export default Title
