import React from 'react'
import { Text, Card, Button } from 'rebass'
import { users, User } from '../data/user'

interface NameListProps {
  user: User | null
  setUser: (user: User | null) => void
}

const NamesList = (props: NameListProps): JSX.Element => {
  const { user, setUser } = props

  const onUserSelected = (selectedUser: User) => {
    setUser(selectedUser)
  }
  return (
    <div>
      <Card m="2" bg="gray" color="primary">
        <Text>Please select your name</Text>
        {users.map((u) => (
          <Button
            variant={u.id === user?.id ? 'primary' : 'outline'}
            onClick={() => onUserSelected(u)}
            key={u.id}
            m={1}
          >
            {u.name}
          </Button>
        ))}
      </Card>
    </div>
  )
}

export default NamesList