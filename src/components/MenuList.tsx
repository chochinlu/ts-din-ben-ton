import React from 'react'
import { format } from 'date-fns'
import { Bento, BentoCompany, menu } from '../data/menu'
import { Card, Text, Button } from 'rebass'
import { User } from '../data/user'

interface MenuListProps {
  user: User | null
  company: string | null
  setCompany: (bc: string | null) => void
  selectedBento: Bento | null
  setSelectedBento: (b: Bento | null) => void
  setErrorMsg: (b: string) => void
}

const MenuList = (props: MenuListProps): JSX.Element => {
  const {
    user,
    selectedBento,
    setSelectedBento,
    company,
    setCompany,
    setErrorMsg,
  } = props

  const setBento = (companyName: string, b: Bento) => {
    setCompany(companyName)
    setSelectedBento(b)

    if (!user) {
      setErrorMsg('Select your name!')
      window.scrollTo(0, 0)
    }
  }

  const todayStr = format(new Date(), 'yyyy/MM/dd')

  const renderButton = (m: BentoCompany, b: Bento): JSX.Element | null => {
    if (!b.active) {
      return null
    }
    return (
      <Button
        key={`b-${m.id}-${b.id}`}
        m={1}
        sx={{
          ':hover': {
            backgroundColor: 'primary',
            color: 'white',
            cursor: 'pointer',
          },
        }}
        variant={
          company === m.name && selectedBento?.id === b.id
            ? 'primary'
            : 'outline'
        }
        onClick={() => setBento(m.name, b)}
      >
        {b.name} (${b.price})
      </Button>
    )
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
      {menu.map((m) =>
        !m.date || (m.date && m.date.includes(todayStr)) ? (
          <Card color="primary" m="2" bg="gray" key={`c-${m.id}`}>
            <Text>{m.name}</Text>
            {m.bento.map((b) =>
              !b.date || (b.date && b.date.includes(todayStr))
                ? renderButton(m, b)
                : null,
            )}
          </Card>
        ) : null,
      )}
    </Card>
  )
}
export default MenuList
