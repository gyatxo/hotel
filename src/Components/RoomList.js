import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import AddRoom from './Forms/AddRoom'
import EditRoom from './Forms/EditRoom'


function RoomList() {
    const [room, setRoom]= useState([])
    const [roomById, setRoomById]= useState([])
    const [id, setId]= useState('')

    const token= localStorage.getItem("token")
    const getRoom = async () =>{
        const response = await axios.get('/room/list')
        
        setRoom(response.data)
    }

    const getRoomById = async ()=>{
        const res = await axios.get(`/room/id/${id}`)
        setRoomById(res.data)
    }

    useEffect(()=>{
        getRoom()
        if(id){
            getRoomById()
        }
    })
    

    const deleteRoom =async (id) =>{
         await axios.delete(`/room/delete/${id}`,{
             headers: {"authorization" : "Bearer " + token}
         }) 
    }
  return (
    <>
    <div id="page-content-wrapper">
            <div className="container-fluid px-4">
                <div className="row my-5">
                    <h3 className="fs-4 mb-3">Room Details</h3>
                    
                    <div className='my-4 d-grid gap-2 d-md-flex justify-content-md-end'>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addRoom">
                        <i className='fa fa-plus '>  Add Room</i>
                        </button>
                    </div>

                    <div className="col">
                        <table className="table bg-white rounded shadow-sm">
                            <thead>
                                <tr>
                                    <th scope="col" width="50">S.N.</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Capacity</th>
                                    <th scope="col">Bed Size</th>
                                    <th scope="col">Total Room</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                { room.length>0? room.map((room,i)=>(
                                <tr key={i}>
                                    <th scope="row">{i+1}</th>
                                    <td>{room.title}</td>
                                    <td>{room.price}</td>
                                    <td>{room.capacity}</td>
                                    <td>{room.bedSize}</td>
                                    <td>{room.totalRoom}</td>
                                    <td>
                                    <button onClick={()=> setId(room.id)} type="button"  className="btn" data-bs-toggle="modal" data-bs-target="#editRoom">
                                        <i className='fa fa-pen'></i>
                                    </button>    
                                    <button onClick={()=>deleteRoom(room.id)} type="button" className="btn" >
                                        <i className='fa fa-trash'></i>
                                    </button>
                                    
                                    </td>
                                </tr>
                                )): <tr>
                                <th scope="row">0</th>
                                <td>Loading...</td>
                            </tr>}
                            </tbody>
                        </table>
                    </div>

                    {/* add room modal */}
                    <div className="modal fade" id="addRoom" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <AddRoom token={token}/>
                    </div>

                    {/* edit user modal */}
                    <div className="modal fade" id="editRoom" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <EditRoom roomId={id} room={roomById} token={token}/>
                    </div>

                    

                </div>

            </div>
        </div>
    </>
  )
}

export default RoomList