import React from 'react'
import { Button, Card } from 'rebass'

const PassOrder = (): JSX.Element => {
  return (
    <Card
      m={2}
      sx={{
        borderWidth: '8px',
        borderStyle: 'solid',
        borderColor: 'gray',
        borderRadius: '4px',
      }}
    >
      <Button
          fontWeight="bold"
        sx={{
          ':hover': {
            backgroundColor: 'primary',
            color: 'white',
            cursor: 'pointer',
          },
          width: '100%',
        }}
        variant="outline"
      >
        今天不訂<span role="img" aria-label="haha">😎</span>
      </Button>
    </Card>
  )
}
export default PassOrder
