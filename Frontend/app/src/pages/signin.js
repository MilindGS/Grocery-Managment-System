import { Link, useNavigate } from 'react-router-dom'
import config from '../config'
import axios from 'axios'
import { toast } from 'react-toastify'
import '../css/customer/login.css'
import { useState } from 'react'
import Login from './customer/signup';

const Signin = () => {
  const [s_email, setS_email] = useState('')
  const [s_password, setS_password] = useState('')

  const navigate = useNavigate()

  const signin = () => {
    if (s_email.length === 0) {
      toast.error('please enter email')
    } else if (s_password.length === 0) {
      toast.error('please enter password')
    } else if (s_email === 'admin@gms.com' && s_password === 'admin') {
      toast.success('Welcome Admin!')
      window.sessionStorage.setItem("adminkey", "s_password");
      navigate('/aseller')
    } else if (s_email === 'admin@gms.com' && s_password != 'admin') {
      toast.error('Admin password Incorrect!!')
      //navigate('/signin')
    } else {
      axios
        .post(config.sellerURL + '/signin_auth', {
          s_email,
          s_password,
        })
        .then((response) => {
          const result = response
          console.log(result)

          if (result['data'] === 0) {
            toast.error('invalid email or password')
          } else {
            toast.success('Welcome to GMS')
            const id = result.data.s_id
            sessionStorage['id'] = id
            navigate('/sproduct')
          }
        }).catch((error) => {
          console.log(error);

          toast.error("Something went wrong");
          navigate('/signin')
        });
    }
  }

  return (
    <div style={{ marginTop: 100 }}>
      <div style={styles.container}>
        <h3
          className="form-label"
          style={{ textAlign: "center", marginBottom: "6%" }}
        >
          GMS Seller Login
        </h3>
        <div className='mb-3'>
          <label>Email</label>
          <input
            onChange={(event) => {
              setS_email(event.target.value)
            }}
            className='form-control'
            type='email'
            placeholder="Email address"
          />
        </div>
        <div className='mb-3'>
          <label>Password</label>
          <input
            onChange={(event) => {
              setS_password(event.target.value)
            }}
            className='form-control'
            type='password'
            placeholder="Password"
          />
        </div>
        <div className='mb-3' style={{ marginTop: 25, textAlign: "center" }}>

          <button onClick={signin} style={styles.signinButton}>
            Signin
          </button>
          <div style={{ marginTop: "8%" }}>
            <Link to='/ssignup'>Dont have account? Signup Here</Link>
          </div>
        </div>
      </div>
    </div >
  )
}

const styles = {
  container: {
    width: 400,
    height: 325,
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
export default Signin
