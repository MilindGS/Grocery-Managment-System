import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import config from '../../../config'
import axios from 'axios'
import Input from '../../../components/admin/input'
import Button from '../../../components/admin/button'

const Editproduct = () => {
  const [name, setName] = useState({})
  const [price, setPrice] = useState({})
  const [unit, setUnit] = useState({})
  const [pdetails, setPdetails] = useState({})
  const [image, setImage] = useState({})

  const location = useLocation()

  const navigate = useNavigate()

  const updateProduct = () => { }

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
                  setName(e.target.value)
                }}
              />
              <Input
                title='Price'
                onChange={(e) => {
                  setPrice(e.target.value)
                }}
              />
              <Input
                title='Unit'
                onChange={(e) => {
                  setUnit(e.target.value)
                }}
              />
              <Input
                title='Details'
                onChange={(e) => {
                  setPdetails(e.target.value)
                }}
              />
              <Input
                title='Image'
                onChange={(e) => {
                  setImage(e.target.value)
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
