import React from 'react'
import { Text, Card, Button } from 'rebass'
import { users, User } from '../data/user'

interface NameListProps {
  user: User | null
  setUser: (user: User | null) => void
}

const NamesList = (props: NameListProps): JSX.Element => {
  const { user, setUser } = props

  return (
    <Card m="2" bg="gray" color="primary">
      <Text>Please select your name</Text>
      {users.map((u) => (
        <Button
          variant={u.id === user?.id ? 'primary' : 'outline'}
          onClick={() => setUser(u)}
          key={u.id}
          m={1}
        >
          {u.name}
        </Button>
      ))}
    </Card>
  )
}

export default NamesList
