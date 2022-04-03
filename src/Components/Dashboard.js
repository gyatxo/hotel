import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Dashboard() {
        const navigate = useNavigate()
  return (
    <>

    <div className="d-flex" id="wrapper">
        <div className="bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
                    className="fas fa-user-secret me-2"></i>Dashboard</div>
            <div className="list-group list-group-flush my-3">
                <h1>HOME</h1>
                <h2>ROOM SETTINGS</h2>
                <Link to={'room'} className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        className="fas fa-home me-2"></i>Add Room</Link>
                <button onClick={()=> {
                        localStorage.clear()
                        navigate('/')
                }} className='btn list-group-item list-group-item-action bg-transparent text-danger fw-bold' ><i className='fa fa-power-off'>    Log Out</i></button>
            </div>
        </div>

        <Outlet />
        
    </div>

  </>
  )
}

export default Dashboard