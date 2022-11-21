import axios from 'axios'
import config from '../../../config'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Customerdetails = () => {
  const [customers, setCustomers] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    getCustomers()
  }, [])

  const getCustomers = () => {
    axios.get(config.adminURL + '/customers_list', {}).then((response) => {
      const result = response
      setCustomers(result['data'])
      // console.log(result);
    })
  }

  // const addCustomer = () => {
  //   navigate('/addcustomer')
  // }

  const editCustomer = (id) => {
    navigate('/editcustomer', { state: { id: id } })
  }

  const deleteCustomer = (id) => {
    axios.put(config.adminURL + '/customers/delete/' + id).then((response) => {
      const result = response
      if (result['data'] === 'Customer Deleted Successfully') {
        getCustomers()
        toast.success('Deleted Sucessfully')
      } else {
        toast.error('Something went wrong')
      }
    })
  }

  return (
    <div>
      <div className='container'>
        <h3 style={styles.h3}>Customer Details</h3>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Address</th>
              <th>Pincode</th>
              <th>City</th>
              <th>State</th>
              <th>Deleted</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => {
              return (
                <tr key={customer.c_id}>
                  <td>{customer.c_id}</td>
                  <td>{customer.c_fname}</td>
                  <td>{customer.c_lname}</td>
                  <td>{customer.c_email}</td>
                  <td>{customer.c_mobile}</td>
                  <td>{customer.c_address}</td>
                  <td>{customer.c_pincode}</td>
                  <td>{customer.c_city}</td>
                  <td>{customer.c_state}</td>
                  <td>{String(customer.deleted)}</td>
                  <td>
                    {/* <button
                      onClick={() => addCustomer()}
                      style={styles.button}
                      className='btn btn-sm btn-warning'>
                      Add
                    </button> */}
                    <button
                      onClick={() => editCustomer(customer.c_id)}
                      style={styles.button}
                      className='btn btn-sm btn-success'>
                      Edit
                    </button>
                    <button
                      onClick={() => deleteCustomer(customer.c_id)}
                      style={styles.button}
                      className='btn btn-sm btn-danger'>
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const styles = {
  h3: {
    textAlign: 'center',
    margin: 20,
  },
  button: {
    marginRight: 10,
  },
}

export default Customerdetails
