import React, { useState } from 'react'
import MenuList from './components/MenuList'
import NamesList from './components/NamesList'
import { Bento } from './data/menu'
import { User } from './data/user'
import Title from './components/Title'

function App() {
  const [company, setCompany] = useState<string | null>(null)
  const [selectedBento, setSelectedBento] = useState<Bento | null>(null)
  const [user, setUser] = useState<User | null>(null)
  return (
    <div>
      <Title />
      <MenuList
        company={company}
        setCompany={setCompany}
        selectedBento={selectedBento}
        setSelectedBento={setSelectedBento}
      />
      <hr />
      <NamesList user={user} setUser={setUser} />
      <div>select people</div>
      {company && selectedBento && user && (
        <h1>
          {user.name}: {company} - {selectedBento?.name} X 1
        </h1>
      )}
      <div>output order (slack)</div>
      <div>output order (line)</div>
    </div>
  )
}

export default App
