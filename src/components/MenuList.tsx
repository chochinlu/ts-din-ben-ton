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
    <div>
      {menu.map((m) => (
        <Card color="primary" m="2" bg="gray">
          <Text>{m.name}</Text>
          {m.bento.map((b) => (
            <Button
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
    </div>
  )
}
export default MenuList
