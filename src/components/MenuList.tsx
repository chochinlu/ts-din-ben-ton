import React from 'react'
import { Bento, menu } from '../data/menu'
import { Card, Text, Button } from 'rebass'

interface MenuListProps {
  company: string | null
  setCompany: (bc: string | null) => void
  selectedBento: Bento | null
  setSelectedBento: (b: Bento | null) => void
}

const MenuList = (props: MenuListProps): JSX.Element => {
  const { selectedBento, setSelectedBento, company, setCompany } = props

  const setBento = (companyName: string, b: Bento) => {
    setCompany(companyName)
    setSelectedBento(b)
  }

  return (
    <Card
      mx={2}
      sx={{
        borderWidth: '8px',
        borderStyle: 'solid',
        borderColor: 'gray',
        borderRadius: '4px',
      }}
    >
      {menu.map((m) => (
        <Card color="primary" m="2" bg="gray" key={`c-${m.id}`}>
          <Text>{m.name}</Text>
          {m.bento.map((b) => (
            <Button
              key={`b-${m.id}-${b.id}`}
              m={1}
              variant={
                company === m.name && selectedBento?.id === b.id
                  ? 'primary'
                  : 'outline'
              }
              onClick={() => setBento(m.name, b)}
            >
              {b.name}
            </Button>
          ))}
        </Card>
      ))}
    </Card>
  )
}
export default MenuList
