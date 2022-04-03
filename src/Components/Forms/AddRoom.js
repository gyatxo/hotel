import { useFormik } from 'formik'
import axios from '../../api/axios'


function AddRoom({token}) {
    
    const formik = useFormik({
        initialValues:{
            title:'',
            price:'',
            capacity:'',
            bedSize: '',
            totalRoom: '',
            image: '',
            category: ''
        },
        validate:values=>{
            let errors = {}
            if(!values.price){
                errors.price = 'Enter a price'
            }
            if(!values.title){
                errors.title = 'Enter a title'
            }
            if(!values.capacity){
                errors.capacity = 'Enter a capacity'
            }
            if(!values.bedSize){
                errors.bedSize = 'Enter a bedSize'
            }
            if(!values.totalRoom){
                errors.totalRoom = 'Enter a totalRoom'
            }
            if(!values.image){
                errors.image = 'Enter a image'
            }
            if(!values.category){
                errors.category = 'Enter a Category'
            }
            return errors
        },
        onSubmit: async (values, onSubmitProps) => {
            try{
                const response = await axios.post('/room/save',{
                    headers:{"authorization":"Bearer "+token}
                }, values)
                if(response){
                    
                    console.log(values)
                }
          }
            catch (err){
              console.log(err)
            }
            onSubmitProps.setSubmitting(false)
            onSubmitProps.resetForm()
        }
        
    })

  return (
<div className="modal-dialog">
    <div className="modal-content">
    <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Add User</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>

    <form className="row g-3" onSubmit={formik.handleSubmit}>
    <div className="modal-body"> 
        <div >
            <label  className="col-sm-2"> Title</label>
            <input type="text"  className="form-control col-sm-4" name='title' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.title} />
        </div>
        {formik.touched.title && formik.errors.title? <div className='errors'>{formik.errors.title}</div>:null}
        <div >
            <label  className="col-sm-2">Price</label>
            <input type="number" className="form-control col-sm-6"  name='price' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.price} />
        </div>
        {formik.touched.price && formik.errors.price? <div className='errors'>{formik.errors.price}</div>:null}
        <div >
            <label  className="col-sm-2">Capacity</label>
            <input type="number" className="form-control col-sm-6" name='capacity' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.capacity} />
        </div>
        {formik.touched.capacity && formik.errors.capacity? <div className='errors'>{formik.errors.capacity}</div>:null}
        <div >
            <label  className="col-sm-2"> Bed Size</label>
            <input type="text"  className="form-control col-sm-4" name='bedSize' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.bedSize} />
        </div>
        {formik.touched.bedSize && formik.errors.bedSize? <div className='errors'>{formik.errors.bedSize}</div>:null}
        <div >
            <label  className="col-sm-2">Total Room</label>
            <input type="number" className="form-control col-sm-6" name='totalRoom' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.totalRoom} />
        </div>
        {formik.touched.totalRoom && formik.errors.totalRoom? <div className='errors'>{formik.errors.totalRoom}</div>:null}
        <div >
            <label  className="col-sm-2">Image</label>
            <input type="text" className="form-control col-sm-6" name='image' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.image} />
        </div>
        {formik.touched.image && formik.errors.image? <div className='errors'>{formik.errors.image}</div>:null}
        <div >
            <label  className="col-sm-2">Category</label>
            <input type="text" className="form-control col-sm-6" name='category' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.category} />
        </div>
        {formik.touched.category && formik.errors.category? <div className='errors'>{formik.errors.category}</div>:null}
        
    </div>
    <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="submit" className="btn btn-primary">Add</button>
    </div>
    </form>

    </div>
</div>
  )
}

export default AddRoom