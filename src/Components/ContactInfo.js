import React from 'react'

function ContactInfo() {
  return (
    <div className="contact-imfo-box">
		<div className="container">
			<div className="row">
				<div className="col-md-4">
					<i className="fa fa-phone"></i>
					<div className="overflow-hidden">
						<h4>Phone</h4>
						<p className="lead">
							01 4481 486
						</p>
					</div>
				</div>
				<div className="col-md-4">
					<i className="fa fa-envelope"></i>
					<div className="overflow-hidden">
						<h4>Email</h4>
						<p className="lead">
							tensar.hotel@gmail.com
						</p>
					</div>
				</div>
				<div className="col-md-4">
					<i className="fa fa-map-marker"></i>
					<div className="overflow-hidden">
						<h4>Location</h4>
						<p className="lead">
							Tusal, Kathmandu
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default ContactInfo