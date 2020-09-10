import React from 'react'
import { Text, Card, Button } from 'rebass'
import { User } from '../data/user'

interface NameListProps {
  user: User | null
  setUser: (user: User | null) => void
  users: any | undefined
  orders: any | undefined
}

const NamesList = (props: NameListProps): JSX.Element => {
  const { user, setUser, users, orders } = props
  let haveOrderUser = Object.keys(orders)

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
        .map((key) => {
          const isSelectUser = users[key].id === user?.id
          const isHaveOrderUser = haveOrderUser.includes(key)
          let variant = 'outline'

          if (isSelectUser) {
            variant = 'primary'
          } else if (isHaveOrderUser) {
            variant = 'secondary'
          }

          return (
            <Button
              sx={{
                ':hover': {
                  backgroundColor: 'primary',
                  color: 'white',
                  cursor: 'pointer',
                },
              }}
              variant={variant}
              onClick={() => setUser(users[key])}
              key={users[key].id}
              m={1}
            >
              {users[key].name}
            </Button>
          )
        })}
    </Card>
  )
}

export default NamesList
