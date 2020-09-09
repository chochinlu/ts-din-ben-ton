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
import { isUndefined } from 'util'

function App() {
  const [company, setCompany] = useState<string | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [selectedBento, setSelectedBento] = useState<Bento | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [orders, setOrders] = useState<any[] | undefined>([])

  useEffect(() => {
    // get orders
    const unsubscribe = database
      .collection('orders')
      .doc(todayForFirebase)
      .onSnapshot((doc: any | null) => {
        isUndefined(doc.data())
          ? setOrders([])
          : setOrders(Object.values(doc.data()))
      })
    return () => {
      unsubscribe()
    }
  }, [])
  return (
    <div>
      <Title errorMsg={errorMsg} user={user} />
      <NamesList user={user} setUser={setUser} />
      <MenuList
        user={user}
        company={company}
        setCompany={setCompany}
        selectedBento={selectedBento}
        setSelectedBento={setSelectedBento}
        setErrorMsg={setErrorMsg}
      />
      <OrderForm user={user} company={company} selectedBento={selectedBento} />
      <OrderList orders={orders} />
    </div>
  )
}

export default App
