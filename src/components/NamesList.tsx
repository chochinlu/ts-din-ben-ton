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
    <Card
      mx={2}
      mt={3}
      py={3}
      color="primary"
      sx={{
        borderWidth: '8px',
        borderStyle: 'solid',
        borderColor: 'gray',
        borderRadius: '4px',
      }}
    >
      <Text fontWeight="bold" fontSize={3} mb={2}>
        Your Name
      </Text>
      {users.map((u) => (
        <Button
          sx={{
            ':hover': {
              backgroundColor: 'primary',
              color: 'white',
              cursor: 'pointer',
            },
          }}
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
