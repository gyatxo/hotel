import React from 'react'
import { Outlet } from 'react-router-dom'
import About from './About'
import ContactInfo from './ContactInfo'
import Footer from './Footer'
import Header from './Header'

function Home() {
  return (
    <>
	<Header/>
	<About />
	<Outlet />
	<ContactInfo/>
	<Footer/>
	</>
  )
}

export default Home