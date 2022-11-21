import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import config from '../../../config'
import axios from 'axios'
import Input from '../../../components/admin/input'
import Button from '../../../components/admin/button'


const Editcustomer = () => {
  const [c_fname, setC_fname] = useState()
  const [c_lname, setC_lname] = useState()
  const [c_email, setC_email] = useState()
  const [c_mobile, setC_mobile] = useState()
  const [c_password, setC_password] = useState()
  const [c_address, setC_address] = useState()
  const [c_pincode, setC_pincode] = useState()
  const [c_city, setC_city] = useState()
  const [c_state, setC_state] = useState()

  const location = useLocation()

  const navigate = useNavigate()

  const id = location.state

  const updateCustomer = () => {
    const body = {
      c_fname,
      c_lname,
      c_email,
      c_mobile,
      c_password,
      c_address,
      c_pincode,
      c_city,
      c_state,
    }
    if (c_fname.length === 0) {
      toast.error('please enter first name')
    } else if (c_lname.length === 0) {
      toast.error('please enter last name')
    } else if (c_email.length === 0) {
      toast.error('please enter email')
    } else if (c_mobile.length === 0) {
      toast.error('please enter mobile')
    } else if (c_password.length === 0) {
      toast.error('please enter password')
    } else if (c_pincode.length === 0) {
      toast.error('please enter email')
    } else if (c_city.length === 0) {
      toast.error('please enter city')
    } else if (c_state.length === 0) {
      toast.error('please enter email')
    } else if (c_address.length === 0) {
      toast.error('please enter email')
    } else {
      axios
        .put(config.adminURL + '/customers/update/' + id.id, body)
        .then((response) => {
          const result = response
          console.log(result)

          if (result['data'] === 0) {
            toast.error('Cannot Update')
          } else {
            toast.success('Updated Successfully')
            navigate('/acustomer')
          }
        })
    }
  }

  return (
    <div>

      <div className='container'>
        <h3 style={{ textAlign: 'center', margin: 20 }}>Update Customer</h3>
        <div className='row'>
          <div className='row'>
            <div
              className='col'
              style={{
                borderRightStyle: 'solid',
                borderRightColor: 'lightgray',
              }}>
              <Input
                title='First Name'
                onChange={(e) => {
                  setC_fname(e.target.value)
                }}
              />
              <Input
                title='Last Name'
                onChange={(e) => {
                  setC_lname(e.target.value)
                }}
              />
              <Input
                title='Email'
                onChange={(e) => {
                  setC_email(e.target.value)
                }}
              />
              <Input
                title='Mobile Number'
                onChange={(e) => {
                  setC_mobile(e.target.value)
                }}
              />
              <Input
                title='Password'
                onChange={(e) => {
                  setC_password(e.target.value)
                }}
              />
              <Input
                title='Address'
                onChange={(e) => {
                  setC_address(e.target.value)
                }}
              />
              <Input
                title='Pincode'
                onChange={(e) => {
                  setC_pincode(e.target.value)
                }}
              />
              <Input
                title='City'
                onChange={(e) => {
                  setC_city(e.target.value)
                }}
              />
              <Input
                title='State'
                onChange={(e) => {
                  setC_state(e.target.value)
                }}
              />
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <Button onClick={updateCustomer} title='Update Customer' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editcustomer
