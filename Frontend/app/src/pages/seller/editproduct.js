import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import config from '../../config'
import axios from 'axios'
import Input from '../../components/admin/input'
import Button from '../../components/admin/button'

const Editproduct = () => {
  const [p_name, setP_name] = useState()
  const [p_price, setP_price] = useState()
  const [p_unit, setP_unit] = useState()
  const [p_details, setP_details] = useState()
  const [p_image_path, setP_image_path] = useState()
  const [cat_id, setCat_id] = useState()

  const location = useLocation()

  const navigate = useNavigate()

  const id = location.state

  const updateProduct = () => {
    const body = {
      p_name,
      p_price,
      p_unit,
      p_details,
      p_image_path,
      cat_id: {
        cat_id,
      },
    }

    if (p_name.length === 0) {
      toast.error('please enter name')
    } else if (p_price.length === 0) {
      toast.error('please enter price')
    } else if (p_unit.length === 0) {
      toast.error('please enter unit')
    } else if (p_details.length === 0) {
      toast.error('please enter details')
    } else if (cat_id.length === 0) {
      toast.error('please enter category ID')
    } else {
      axios
        .put(config.sellerURL + '/products/update/' + id.id, body)
        .then((response) => {
          const result = response
          console.log(result)

          if (result['data'] === 0) {
            toast.error('Cannot Update')
          } else {
            toast.success('Updated Successfully')
            navigate('/sproduct')
          }
        })
    }
  }

  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     selectedFile : ''
  //   }
  // }

  // const fileSelected = (e) => {
  //   console.log(e.target.files[0])
  //   this.setState({selectedFile:e.target.files[0]})
  // }

  // const fileUpload = () => {
  //   const fd = new FormData()
  //   fd.append('image', selectedFile)
  //   axios
  //     .post(config.sellerURL + '/products/fileupload', fd)
  //     .then((response) => {
  //       console.log(response)
  //     })
  // }

  return (
    <div>

      <div className='container'>
        <h3 style={{ textAlign: 'center', margin: 20 }}>Update Product</h3>
        <div className='row'>
          <div className='row'>
            <div
              className='col'
              style={{
                borderRightStyle: 'solid',
                borderRightColor: 'lightgray',
              }}>
              <Input
                title='Name'
                onChange={(e) => {
                  setP_name(e.target.value)
                }}
              />
              <Input
                title='Price'
                onChange={(e) => {
                  setP_price(e.target.value)
                }}
              />
              <Input
                title='Unit'
                onChange={(e) => {
                  setP_unit(e.target.value)
                }}
              />
              <Input
                title='Details'
                onChange={(e) => {
                  setP_details(e.target.value)
                }}
              />
              <Input
                title='Image'
                onChange={(e) => {
                  setP_image_path(e.target.value)
                }}
              />
              {/* <button onClick={fileUpload}>Upload</button> */}
              <Input
                title='Category ID'
                onChange={(e) => {
                  setCat_id(e.target.value)
                }}
              />
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <Button onClick={updateProduct} title='Update Product' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editproduct
