import React, { useState } from 'react'
import './App.css'
import NewUser from './Components/NewUser'
import Form from './Components/Form/Form'

function App () {
  const [userNew, setUserNew] = useState([])

  const users = (uName, uAge) => {
    setUserNew(prevNewData => {
      return [...prevNewData, { name: uName, age: uAge }]
    })
  }
  return (
    <>
      <div className='user-app'>
        <Form onAddUser={users} />
        <NewUser users={userNew} />
      </div>
    </>
  )
}

export default App
