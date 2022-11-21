import React, { useState } from 'react'
// import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import '../../config'
import { useEffect } from 'react'
import axios from 'axios'
import config from '../../config'

import ProductCard from '../../components/customer/productcard'

export default function ProductHome(props) {
  const location = useLocation()
  const catid = location.state
  const [products, setProducts] = useState([])
  console.log(catid.catid)
  const getProducts = () => {
    axios
      .get(config.productURL + '/categories/' + catid.catid)
      .then((response) => {
        const result = response.data
        if (result['status'] === 'success') {
          setProducts(result['data'])

          console.log(products)
          // console.log(result["data"]);
        } else {
          console.log('Not success')
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <div className='row' style={{ width: '100%', padding: "5%" }}>
        {products.map((p) => {
          p.p_qty = 0
          return <ProductCard key={p.p_id} product={p} />
        })}
      </div>
    </div>
  )
}
