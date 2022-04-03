import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../api/axios'

function Rooms() {
	const [filterRoom,setFilterRoom] = useState([])
	const [room, setRoom] = useState([])
	const navigate = useNavigate()
	
	const filter =(category)=>{
		let filteredRoom =[]
		if(category !== 'all'){
			filteredRoom = filterRoom.filter((room) => {
				return room.category === category;
		})}
		else if (category  === 'all'){
			filteredRoom=filterRoom;
		}
		console.log(filteredRoom)
		return setRoom(filteredRoom);
	}
	console.log(room)
	const fetchRoom = async ()=>{
		const res = await axios.get('/room/list')
		if (res.data){
			const data= res.data
			setRoom(data)
			setFilterRoom(data)
		}
	}
	useEffect(()=>{
		fetchRoom()
	},[])
  return (
    <div className="menu-box">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="heading-title text-center">
						<h2>Rooms</h2>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12">
					<div className="special-menu text-center">
						<div className="button-group filter-button-group">
							<button className="active" onClick={()=>filter('all')}>All</button>
							<button onClick={()=>filter('lanai')}>Lanai Room</button>
							<button onClick={()=>filter('attached')}>Attached Room</button>
							<button onClick={()=>filter('suite')}>Suite</button>
						</div>
					</div>
				</div>
			</div>
			<div className="row special-list" >
				{ room.length > 0? room.map(room=>(
				<div className="col-lg-4 col-md-6 special-grid drinks" key={room.id}>
					<div className="gallery-single fix">
						<img src={room.image} className="img-fluid" alt="room" />
						<div className="why-text">
							<h4>{room.title}</h4>
							<p>Bed: {room.bed}</p>
							<p>Room: {room.room}</p>
							<p>Capacity: {room.capacity}</p>
							<div className='text-center'>
						<button onClick={()=> navigate('/book')} className="btn btn-lg btn-circle btn-success btn-outline-new-white" >Book: RS.{room.price}</button>
						</div>
						</div>
					</div>
				</div>
				
				
				)): ''}
			</div>
		</div>
	</div>
  )
}

export default Rooms