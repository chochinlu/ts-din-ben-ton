import React, { useState, useEffect } from 'react'
import MenuList from './components/MenuList'
import NamesList from './components/NamesList'
import { Bento } from './data/menu'
import { User } from './data/user'
import Title from './components/Title'
import OrderForm from './components/OrderForm'
import OrderList from './components/OrderList'
import { todayForFirebase } from './utils'
import database from './firebase/firebase'

function App() {
  const [company, setCompany] = useState<string | null>(null)
  const [selectedBento, setSelectedBento] = useState<Bento | null>(null)
  const [user, setUser] = useState<User | null>(null)
  // state from db
  const [users, setUsers] = useState<User[]>([])
  const [orders, setOrders] = useState<any[]>([])

  useEffect(() => {
    // get orders from db
    database.collection(todayForFirebase).onSnapshot((snapshot) => {
      setOrders(snapshot.docs.map((doc) => doc.data()))
    })

    // get users from db
    database
      .collection('users')
      .doc('nogle')
      .get()
      .then((res) => {
        setUsers(res.data()?.users)
      })
  }, [])

  return (
    <div>
      <Title />
      <NamesList user={user} setUser={setUser} users={users} />
      <MenuList
        company={company}
        setCompany={setCompany}
        selectedBento={selectedBento}
        setSelectedBento={setSelectedBento}
      />
      <OrderForm user={user} company={company} selectedBento={selectedBento} />
      <OrderList orders={orders} />
    </div>
  )
}

export default App
