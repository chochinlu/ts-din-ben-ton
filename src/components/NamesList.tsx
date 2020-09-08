import React from 'react'
import { Text, Card, Button } from 'rebass'
import { User } from '../data/user'

interface NameListProps {
  user: User | null
  setUser: (user: User | null) => void
  users: any | undefined
}

const NamesList = (props: NameListProps): JSX.Element => {
  const { user, setUser, users } = props

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
      {Object.keys(users)
        .sort()
        .map((key) => (
          <Button
            sx={{
              ':hover': {
                backgroundColor: 'primary',
                color: 'white',
                cursor: 'pointer',
              },
            }}
            variant={users[key].id === user?.id ? 'primary' : 'outline'}
            onClick={() => setUser(users[key])}
            key={users[key].id}
            m={1}
          >
            {users[key].name}
          </Button>
        ))}
    </Card>
  )
}

export default NamesList
