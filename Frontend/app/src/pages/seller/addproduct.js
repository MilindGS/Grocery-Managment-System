import { useState } from 'react'
import Input from '../../components/admin/input'
import Button from '../../components/admin/button'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import config from '../../config'

const Addproduct = () => {
  const [s_id, setS_id] = useState()
  const [p_name, setP_name] = useState()
  const [p_price, setP_price] = useState()
  const [p_unit, setP_unit] = useState()
  const [p_details, setP_details] = useState()
  const [p_image_path, setP_image_path] = useState()
  const [cat_id, setCat_id] = useState()

  const navigate = useNavigate()

  const addProduct = () => {
    setS_id(sessionStorage['id'])

    const body = {
      p_name,
      p_price,
      p_unit,
      p_details,
      p_image_path,
      cat_id: {
        cat_id,
      },
      s_id: {
        s_id,
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
      axios.post(config.sellerURL + '/products/add', body).then((response) => {
        const result = response
        console.log(result)

        if (result['data'] === 0) {
          toast.error('Cannot Add')
        } else {
          toast.success('Added Successfully')
          navigate('/sproduct')
        }
      })
    }
  }

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
              <Button onClick={addProduct} title='Add Product' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addproduct
