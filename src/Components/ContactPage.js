import { useFormik } from 'formik'
import React from 'react'

function ContactPage() {
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            message:''
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
            console.log(errors)
            return errors
        },
        onSubmit:(values,onSubmitProps)=>{
        console.log(values)
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
						<h2>Contact Us</h2>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12">
					<form id="contactForm" onSubmit={formik.handleSubmit}>
						<div className="row">
							<div className="col-md-12 mb-2">
								<div className="form-group">
									<input type="text" className="form-control" id="name" name="name" placeholder="Your Name" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} />
								</div>          
                                {formik.touched.name&&formik.errors.name? <div className='errors'>{formik.errors.name}</div>: null }                       
							</div>
							<div className="col-md-12 mb-2">
								<div className="form-group">
									<input type="text" placeholder="Your Email" id="email" className="form-control" name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}  />
								</div> 
                                {formik.touched.email&&formik.errors.email? <div className='errors'>{formik.errors.email}</div>: null }                       
							</div>

							<div className="col-md-12 ">
								<div className="form-group"> 
									<textarea className="form-control"  placeholder="Your Message" name='message' rows="4" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.message} ></textarea>
								</div>
                                {formik.touched.message&&formik.errors.message? <div className='errors'>{formik.errors.message}</div>: null }                       
								<div className="submit-button text-center">
									<button className="btn btn-common"  type="submit">Send Message</button>
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

export default ContactPage