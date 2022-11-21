import axios from 'axios'
import config from '../../config'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Sellerproductdetails = () => {
  const [products, setProducts] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const id = sessionStorage['id']
    getProducts(id)
  }, [])

  const getProducts = (id) => {
    axios.get(config.sellerURL + '/products/' + id).then((response) => {
      const result = response
      setProducts(result['data'])
    })
  }

  const addProduct = () => {
    navigate('/selleraddproduct')
  }

  const editProduct = (id) => {
    navigate('/sellereditproduct', { state: { id: id } })
  }

  const deleteProduct = (id) => {
    axios.put(config.sellerURL + '/products/delete/' + id).then((response) => {
      const result = response
      console.log(result)
      if (result['data'] === 'Product Deleted Successfully') {
        const id = sessionStorage['id']
        getProducts(id)
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
              <th>Image</th>
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
                    <button
                      onClick={() => editProduct(product.p_id)}
                      style={styles.button}
                      className='btn btn-sm btn-success'>
                      Edit
                    </button>
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
            <tr>
              {/* <button
                onClick={() => addProduct()}
                style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}
                className='btn btn-sm btn-warning'>
                Add
              </button> */}
            </tr>
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

export default Sellerproductdetails
