import React from 'react'
import Home from './Home'
import Rooms from './Rooms'
import { Route, Routes } from 'react-router-dom'
import ContactPage from './ContactPage'
import Services from './Services'
import Login from './Login'
import Book from './Book'
import Dashboard from './Dashboard'
import RoomList from './RoomList'

function Hotel() {
  return (
    <>
<Routes>
    <Route path='/' element={<Home />}>
      <Route path='rooms' element={<Rooms />} />
      <Route path='services' element={<Services />} />
      <Route path='contact' element={<ContactPage />} />
      <Route path='book' element={<Book />} />
    </Route>
    <Route path='/dashboard' element={<Dashboard />} >
      <Route path='room' element={<RoomList />} />
    </Route>
    <Route path='/login' element={<Login />} />
</Routes>
    </>
  )
}

export default Hotel