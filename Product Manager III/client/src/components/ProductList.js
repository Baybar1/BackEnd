import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const ProductList = (props) => {
    const {removeProduct,product,setProduct} = props

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

    const deleteProduct = (productId) => {
        axios.delete('http://127.0.0.1:8000/api/product/' + productId)
        .then(res => {
            console.log(res)
            removeProduct(productId)
        })
        .catch((err) => console.log(err))
    }

    return (
        <div>
            <h1>Products : </h1>
            {
            product.map((product,index) => {
                return (
                    
                    <div key = {index}>
                        
                        <Link to = {`/product/${product._id}`}>{product.title}</Link><br/>
                        <Link to = {'/product/edit/' + product._id}>Edit</Link>
                        <button onClick={(e) => deleteProduct(product._id)}>Delete</button>
                    </div>
                )
                
                })
            }
            
            </div>
    )
}
