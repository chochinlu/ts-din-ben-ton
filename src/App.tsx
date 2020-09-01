import React, { useState } from 'react'
import { Text } from 'rebass'
import MenuList from './components/MenuList'
import { Bento } from './data/menu'

function App() {
  const [company, setCompany] = useState<string | null>(null)
  const [selectedBento, setSelectedBento] = useState<Bento | null>(null)
  return (
    <div>
      <Text color="primaryDark" fontSize="4">
        Din Den Ton
      </Text>
      <MenuList
        company={company}
        setCompany={setCompany}
        selectedBento={selectedBento}
        setSelectedBento={setSelectedBento}
      />
      <h1>{selectedBento?.name}</h1>
      <div>information: people, remaining...</div>
      <div>input</div>
      <div>output order (slack)</div>
      <div>output order (line)</div>
    </div>
  )
}

export default App
