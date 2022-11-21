import { useState } from 'react'
import Input from '../../../components/admin/input'
import Button from '../../../components/admin/button'

const Addcustomer = () => {
  const [name, setName] = useState({})
  const [email, setEmail] = useState({})
  const [number, setNumber] = useState({})
  const [address, setAddress] = useState({})
  const [state, setState] = useState({})
  const [city, setCity] = useState({})
  const [pincode, setPincode] = useState({})

  const addCustomer = () => { }

  return (
    <div>

      <div className='container'>
        <h3 style={{ textAlign: 'center', margin: 20 }}>Add Customer</h3>
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
                title='Email'
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
              <Input
                title='Number'
                onChange={(e) => {
                  setNumber(e.target.value)
                }}
              />
              <Input
                title='Address'
                onChange={(e) => {
                  setAddress(e.target.value)
                }}
              />
              <Input
                title='City'
                onChange={(e) => {
                  setCity(e.target.value)
                }}
              />
              <Input
                title='State'
                onChange={(e) => {
                  setState(e.target.value)
                }}
              />
              <Input
                title='Pincode'
                onChange={(e) => {
                  setPincode(e.target.value)
                }}
              />
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <Button onClick={addCustomer} title='Add Customer' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addcustomer
