import axios from 'axios'
import config from '../../../config'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Sellerdetails = () => {
  const [sellers, setSellers] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    getSellers()
  }, [])

  const getSellers = () => {
    axios.get(config.adminURL + '/sellers_list').then((response) => {
      const result = response
      console.log(response)
      setSellers(result['data'])
    })
  }

  const editSeller = (id) => {
    navigate('/editSeller', { state: { id: id } })
  }

  const deleteSeller = (id) => {
    axios.put(config.adminURL + '/sellers/delete/' + id).then((response) => {
      const result = response
      console.log(result)
      if (result['data'] === 'Deleted Successfully') {
        getSellers()
        toast.success('Deleted Sucessfully')
      } else {
        toast.error('Something went wrong')
      }
    })
  }

  return (
    <div>
      <div className='container'>
        <h3 style={styles.h3}>Seller Details</h3>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Pincode</th>
              <th>City</th>
              <th>State</th>
              <th>Deleted</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller) => {
              return (
                <tr key={seller.s_id}>
                  <td>{seller.s_id}</td>
                  <td>{seller.s_name}</td>
                  <td>{seller.s_email}</td>
                  <td>{seller.s_mobile}</td>
                  <td>{seller.s_pincode}</td>
                  <td>{seller.s_city}</td>
                  <td>{seller.s_state}</td>
                  <td>{String(seller.deleted)}</td>
                  <td>
                    <button
                      onClick={() => editSeller(seller.s_id)}
                      style={styles.button}
                      className='btn btn-sm btn-success'>
                      Edit
                    </button>
                    <button
                      onClick={() => deleteSeller(seller.s_id)}
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

export default Sellerdetails
