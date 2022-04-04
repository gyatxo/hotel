import { useFormik } from 'formik'
import React from 'react'

function Book() {
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            message:'',
            roomNo: 1,
            person: 2
        },
        validate:values=>{
            let errors = {}
            if(!values.name){
                errors.name = 'Enter a valid name'
            }
            if(!values.email){
                errors.email = 'Enter a valid email'
            }
            if(!values.message){
                errors.message = 'Enter a message'
            }
            return errors
        },
        onSubmit:(values,onSubmitProps)=>{
        onSubmitProps.setSubmitting(false)
        onSubmitProps.resetForm()
        alert('Your Message is Submitted')
        }
    })
  return (
    <div className="contact-box">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="heading-title text-center">
						<h2>Booking</h2>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12">
					<form id="contactForm" onSubmit={formik.handleSubmit}>
						<div className="row">
							<div className="col-md-12 mb-2">
								<div className="form-group">
                                    <label >Name</label>
									<input type="text" className="form-control" id="name" name="name" placeholder="Your Name" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} />
								</div>          
                                {formik.touched.name&&formik.errors.name? <div className='errors'>{formik.errors.name}</div>: null }                       
							</div>
							<div className="col-md-12 mb-2">
								<div className="form-group">
                                    <label >Email</label>
									<input type="text" placeholder="Your Email" id="email" className="form-control" name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}  />
								</div> 
                                {formik.touched.email&&formik.errors.email? <div className='errors'>{formik.errors.email}</div>: null }                       
							</div>
                            <div className="col-md-12 mb-2">
								<div className="form-group">
                                <label >Number of Rooms</label>
									<input type="number" placeholder="No. of rooms?" id="roomNo" className="form-control" name="roomNo" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.roomNo}  />
								</div> 
                                {formik.touched.roomNo&&formik.errors.roomNo? <div className='errors'>{formik.errors.roomNo}</div>: null }                       
							</div>
                            <div className="col-md-12 mb-2">
								<div className="form-group">
                                <label >Number of people</label>
									<input type="text" placeholder="No. of person" id="person" className="form-control" name="person" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.person}  />
								</div> 
                                {formik.touched.person&&formik.errors.person? <div className='errors'>{formik.errors.person}</div>: null }                       
							</div>

							<div className="col-md-12 ">
								<div className="form-group"> 
                                <label >Remark</label>
									<textarea className="form-control"  placeholder="Your Message" name='message' rows="4" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.message} ></textarea>
								</div>
                                {formik.touched.message&&formik.errors.message? <div className='errors'>{formik.errors.message}</div>: null }                       
								<div className="submit-button text-center">
									<button className="btn btn-common"  type="submit"><i className='fa fa-book'> BOOK</i></button>
								</div>
							</div>
						</div>            
					</form>
				</div>
			</div>
		</div>
	</div>
  )
  
}

export default Book