import React, { useState } from 'react'
import MenuList from './components/MenuList'
import NamesList from './components/NamesList'
import { Bento } from './data/menu'
import { User } from './data/user'
import Title from './components/Title'
import OrderForm from './components/OrderForm'
import { Order } from './components/types'

function App() {
  const [company, setCompany] = useState<string | null>(null)
  const [selectedBento, setSelectedBento] = useState<Bento | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [orders, setOrders] = useState<Order[]>([])

  return (
    <div>
      <Title />
      <MenuList
        company={company}
        setCompany={setCompany}
        selectedBento={selectedBento}
        setSelectedBento={setSelectedBento}
      />
      <NamesList user={user} setUser={setUser} />
      <OrderForm
        user={user}
        company={company}
        selectedBento={selectedBento}
        orders={orders}
        setOrders={setOrders}
      />
      <div>output order (slack)</div>
      <div>output order (line)</div>
    </div>
  )
}

export default App
