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
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [selectedBento, setSelectedBento] = useState<Bento | null>(null)
  const [user, setUser] = useState<User | null>(null)
  // state from db
  const [users, setUsers] = useState<{} | undefined>({})
  const [orders, setOrders] = useState<{} | undefined>({})

  useEffect(() => {
    // get orders from db
    // onSnapshot gets the data in realtime
    database
      .collection('orders')
      .doc(todayForFirebase)
      .onSnapshot((snapshot) => {
        setOrders(snapshot.data())
      })

    // get users from db
    database
      .collection('users')
      .doc('nogle')
      .get()
      .then((res) => setUsers(res.data()))
  }, [])
  return (
    <div>
      <Title errorMsg={errorMsg} user={user} />
      <NamesList user={user} setUser={setUser} users={users} />
      <MenuList
        user={user}
        company={company}
        setCompany={setCompany}
        selectedBento={selectedBento}
        setSelectedBento={setSelectedBento}
        setErrorMsg={setErrorMsg}
      />
      <OrderForm
        user={user}
        company={company}
        selectedBento={selectedBento}
        orders={orders}
        users={users}
      />
      <OrderList orders={orders} />
    </div>
  )
}

export default App
