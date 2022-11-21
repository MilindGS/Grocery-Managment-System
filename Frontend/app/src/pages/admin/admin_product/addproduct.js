import { useState } from 'react'
import Input from '../../../components/admin/input'
import Button from '../../../components/admin/button'

const Addproduct = () => {
  const [details, setDetails] = useState({})
  const [categoryId, setCategoryId] = useState({})
  const [sellerId, setSellerId] = useState({})
  const [name, setName] = useState({})
  const [price, setPrice] = useState({})
  const [unit, setUnit] = useState({})
  const [pdetails, setPdetails] = useState({})
  const [image, setImage] = useState({})

  const addProduct = () => { }

  return (
    <div>

      <div className='container'>
        <h3 style={{ textAlign: 'center', margin: 20 }}>Add Product</h3>
        <div className='row'>
          <div className='row'>
            <div
              className='col'
              style={{
                borderRightStyle: 'solid',
                borderRightColor: 'lightgray',
              }}>
              <Input
                title='Seller ID'
                onChange={(e) => {
                  setSellerId(e.target.value)
                }}
              />
              <Input
                title='Category ID'
                onChange={(e) => {
                  setCategoryId(e.target.value)
                }}
              />
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
              <Button onClick={addProduct} title='Add Product' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addproduct
