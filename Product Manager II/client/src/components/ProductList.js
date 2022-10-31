import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const ProductList = (props) => {
    const {product,setProduct} = props

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/product')
        .then((res) => {
            console.log(res)
            console.log(res.data)
            setProduct(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])


    return (
        <div>
            <h1>Products : </h1>
            {
            product.map((product,index) => {
                return (
                    
                    <div key = {index}>
                        
                        <Link to = {`/product/${product._id}`}>{product.title}</Link>
                    </div>
                )
                
                })
            }
            
            </div>
    )
}
