import { useState, Link } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import config from '../../config'
import axios from 'axios'

const Signup = () => {
  const [s_name, setS_name] = useState('')
  const [s_email, setS_email] = useState('')
  const [s_mobile, setS_mobile] = useState('')
  const [s_password, setS_password] = useState('')
  const [s_pincode, setS_pincode] = useState('')
  const [s_city, setS_city] = useState('')
  const [s_state, setS_state] = useState('')

  const navigate = useNavigate()

  const signup = () => {
    if (s_name.length === 0) {
      toast.error('please enter name')
    } else if (s_email.length === 0) {
      toast.error('please enter email')
    } else if (s_mobile.length === 0) {
      toast.error('please enter mobile')
    } else if (s_password.length === 0) {
      toast.error('please enter password')
    } else if (s_pincode.length === 0) {
      toast.error('please enter pincode')
    } else if (s_city.length === 0) {
      toast.error('please enter city')
    } else if (s_state.length === 0) {
      toast.error('please enter state')
    } else {
      axios
        .post(config.sellerURL + '/signup', {
          s_name,
          s_email,
          s_mobile,
          s_password,
          s_pincode,
          s_city,
          s_state,
        })
        .then((response) => {
          const result = response
          console.log(result)

          if (result['data'] === 0) {
            toast.error('Something went wrong')
          } else {
            toast.success('Signed in successfully')
            navigate('/signin')
          }
        })
    }
  }

  return (

    <div>
      <div className='container col-4 mt-5' style={styles.container}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h3>Signup</h3>
        </div>
        <div className='mb-3'>
          <label>Name</label>
          <input
            type='text'
            className='form-control'
            onChange={(event) => {
              setS_name(event.target.value)
            }}
          />
        </div>

        <div className='mb-3'>
          <label>Email</label>
          <input
            type='email'
            className='form-control'
            onChange={(event) => {
              setS_email(event.target.value)
            }}
          />
        </div>
        <div className='mb-3'>
          <label>Password</label>
          <input
            type='password'
            className='form-control'
            onChange={(event) => {
              setS_password(event.target.value)
            }}
          />
        </div>
        <div className='mb-3'>
          <label>Mobile</label>
          <input
            type='tel'
            className='form-control'
            onChange={(event) => {
              setS_mobile(event.target.value)
            }}
          />
        </div>
        <div className='mb-3 d-flex input-group-lg'>
          <label>City</label>&nbsp;
          <input
            type='text'
            className='form-control'
            onChange={(event) => {
              setS_city(event.target.value)
            }}
          />
          &nbsp;&nbsp;
          <label>State</label>&nbsp;
          <input
            type='text'
            className='form-control'
            onChange={(event) => {
              setS_state(event.target.value)
            }}
          />
        </div>
        <div className='mb-3'>
          <label>Pincode</label>
          <input
            type='pincode'
            className='form-control'
            onChange={(event) => {
              setS_pincode(event.target.value)
            }}
          />
        </div>
        <div className='mb-3' style={{ marginTop: 20 }}>

          <button onClick={signup} style={styles.signinButton}>
            Signup
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    width: 400,
    height: 650,
    padding: 30,
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    borderColor: '#C9C9C9',
    borderRadius: 10,
    broderWidth: 1,
    borderStyle: 'solid',
    boxShadow: '1px 1px 20px 5px #C9C9C9',
  },
  signinButton: {
    position: 'relative',
    width: '100%',
    height: 40,
    backgroundColor: '#27ae60',
    color: 'white',
    borderRadius: 5,
    border: 'none',
    marginTop: 10,
  },
}

export default Signup
