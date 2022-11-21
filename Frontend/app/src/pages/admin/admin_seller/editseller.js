import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import config from '../../../config'
import axios from 'axios'
import Input from '../../../components/admin/input'
import Button from '../../../components/admin/button'

const Editseller = () => {
  const [s_name, setS_name] = useState()
  const [s_email, setS_email] = useState()
  const [s_mobile, setS_mobile] = useState()
  const [s_password, setS_password] = useState()
  const [s_pincode, setS_pincode] = useState()
  const [s_city, setS_city] = useState()
  const [s_state, setS_state] = useState()

  const location = useLocation()

  const navigate = useNavigate()

  const id = location.state

  const updateSeller = () => {
    const body = {
      s_name,
      s_email,
      s_mobile,
      s_password,
      s_pincode,
      s_city,
      s_state,
    }

    if (s_name.length === 0) {
      toast.error('please enter name')
    } else if (s_email.length === 0) {
      toast.error('please enter email')
    } else if (s_mobile.length === 0) {
      toast.error('please enter mobile')
    } else if (s_password.length === 0) {
      toast.error('please enter password')
    } else if (s_pincode.length === 0) {
      toast.error('please enter email')
    } else if (s_city.length === 0) {
      toast.error('please enter city')
    } else if (s_state.length === 0) {
      toast.error('please enter email')
    } else {
      axios
        .put(config.adminURL + '/sellers/update/' + id.id, body)
        .then((response) => {
          const result = response
          console.log(result)

          if (result['data'] === 0) {
            toast.error('Cannot Update')
          } else {
            toast.success('Updated Successfully')
            navigate('/aseller')
          }
        })
    }
  }

  return (
    <div>
      <div className='container'>
        <h3 style={{ textAlign: 'center', margin: 20 }}>Update Seller</h3>
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
                  setS_name(e.target.value)
                }}
              />
              <Input
                title='Email'
                onChange={(e) => {
                  setS_email(e.target.value)
                }}
              />
              <Input
                title='Phone Number'
                onChange={(e) => {
                  setS_mobile(e.target.value)
                }}
              />
              <Input
                title='Password'
                onChange={(e) => {
                  setS_password(e.target.value)
                }}
              />
              <Input
                title='Pincode'
                onChange={(e) => {
                  setS_pincode(e.target.value)
                }}
              />
              <Input
                title='City'
                onChange={(e) => {
                  setS_city(e.target.value)
                }}
              />
              <Input
                title='State'
                onChange={(e) => {
                  setS_state(e.target.value)
                }}
              />
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <Button onClick={updateSeller} title='Update Seller' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editseller
