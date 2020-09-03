import React, { useState } from 'react'
import MenuList from './components/MenuList'
import NamesList from './components/NamesList'
import { Bento } from './data/menu'
import { User } from './data/user'
import Title from './components/Title'
import OrderForm from './components/OrderForm'
import { Order } from './components/types'
import OrderList from './components/OrderList'

function App() {
  const [company, setCompany] = useState<string | null>(null)
  const [selectedBento, setSelectedBento] = useState<Bento | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [orders, setOrders] = useState<Order[]>([])

  return (
    <div>
      <Title />
      <NamesList user={user} setUser={setUser} />
      <MenuList
        company={company}
        setCompany={setCompany}
        selectedBento={selectedBento}
        setSelectedBento={setSelectedBento}
      />
      <OrderForm
        user={user}
        company={company}
        selectedBento={selectedBento}
        orders={orders}
        setOrders={setOrders}
      />
      <OrderList orders={orders} />
    </div>
  )
}

export default App
