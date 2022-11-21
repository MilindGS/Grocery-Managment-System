import axios from 'axios'
import config from '../../../config'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Adminproductdetails = () => {
  const [products, setProducts] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    axios.get(config.adminURL + '/products_list', {}).then((response) => {
      const result = response
      setProducts(result['data'])
      console.log(result)
    })
  }

  // const addProduct = () => {
  //   navigate('/adminaddproduct')
  // }

  // const editProduct = (id) => {
  //   navigate('/admineditproduct', { state: { id: id } })
  // }

  const deleteProduct = (id) => {
    axios.put(config.adminURL + '/products/delete/' + id).then((response) => {
      const result = response
      console.log(result)
      if (result['data'] === 'Product Deleted Successfully') {
        getProducts()
        toast.success('Deleted Sucessfully')
      } else {
        toast.error('Something went wrong')
      }
    })
  }

  return (
    <div>

      <div className='container'>
        <h3 style={styles.h3}>Product Details</h3>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Seller ID</th>
              <th>Category ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Unit</th>
              <th>Details</th>
              <th>Image Path</th>
              <th>Deleted</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.p_id}>
                  <td>{product.p_id}</td>
                  <td>{product.s_id.s_id}</td>
                  <td>{product.cat_id.cat_id}</td>
                  <td>{product.p_name}</td>
                  <td>{product.p_price}</td>
                  <td>{product.p_unit}</td>
                  <td>{product.p_details}</td>
                  <td>{product.p_image_path}</td>
                  <td>{String(product.deleted)}</td>
                  <td>
                    {/* <button
                      onClick={() => addProduct()}
                      style={styles.button}
                      className='btn btn-sm btn-warning'>
                      Add
                    </button> */}
                    {/* <button
                      onClick={() => editProduct(product.p_id)}
                      style={styles.button}
                      className='btn btn-sm btn-success'>
                      Edit
                    </button> */}
                    <button
                      onClick={() => deleteProduct(product.p_id)}
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

export default Adminproductdetails
