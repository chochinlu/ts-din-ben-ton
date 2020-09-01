import React, { useState } from 'react'
import MenuList from './components/MenuList'
import { Bento } from './data/menu'
import Title from './components/Title'
import OrderForm from './components/OrderForm'

function App() {
  const [company, setCompany] = useState<string | null>(null)
  const [selectedBento, setSelectedBento] = useState<Bento | null>(null)
  return (
    <div>
      <Title />
      <MenuList
        company={company}
        setCompany={setCompany}
        selectedBento={selectedBento}
        setSelectedBento={setSelectedBento}
      />
      <div>select people</div>
      <OrderForm company={company} selectedBento={selectedBento} />
      <div>output order (slack)</div>
      <div>output order (line)</div>
    </div>
  )
}

export default App
