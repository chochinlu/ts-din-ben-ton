import React from 'react'
import { format } from 'date-fns'
import { Bento, BentoCompany, menu } from '../data/menu'
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

  const todayStr = format(new Date(), 'yyyy/MM/dd')

  const renderButton = (m: BentoCompany, b: Bento): JSX.Element => (
    <Button
      sx={{
        ':hover': {
          backgroundColor: 'primary',
          color: 'white',
          cursor: 'pointer',
        },
      }}
      key={`b-${m.id}-${b.id}`}
      m={1}
      variant={
        company === m.name && selectedBento?.id === b.id ? 'primary' : 'outline'
      }
      onClick={() => setBento(m.name, b)}
    >
      {b.name} (${b.price})
    </Button>
  )

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
      {menu.map((m) => {
        if (!m.date || (m.date && m.date.includes(todayStr))) {
          return (
            <Card color="primary" m="2" bg="gray" key={`c-${m.id}`}>
              <Text>{m.name}</Text>
              {m.bento.map((b) => {
                if (!b.date || (b.date && b.date.includes(todayStr))) {
                  return renderButton(m, b)
                } else {
                  return null
                }
              })}
            </Card>
          )
        } else {
          return null
        }
      })}
    </Card>
  )
}
export default MenuList
