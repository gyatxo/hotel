import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="top-navbar">
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<a className="navbar-brand" href="index.html">
					<img src="images/logo.jpg" height='50' width='80' alt="logo" />
				</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-rs-food" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
				  <span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbars-rs-food">
					<ul className="navbar-nav " style={{marginLeft:'auto'}}>
						<NavLink to='/' className="nav-link" ><li className="nav-item">Home</li></NavLink>
						{/* <NavLink to='' className="nav-link" ><li className="nav-item">About Us</li></NavLink> */}
						<NavLink to='rooms' className="nav-link" ><li className="nav-item">Rooms</li></NavLink>
						<NavLink to='services' className="nav-link" ><li className="nav-item">Services</li></NavLink>
						<NavLink to='contact' className="nav-link" ><li className="nav-item">Contact Us</li></NavLink>
						<NavLink to='/login' className="nav-link" ><li className="nav-item "><i className='fa fa-user'>  Admin</i></li></NavLink>
					</ul>
				</div>
			</div>
		</nav>
	</header>
  )
}

export default Header