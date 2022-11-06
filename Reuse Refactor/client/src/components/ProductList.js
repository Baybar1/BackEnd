import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DeleteButton } from './DeleteButton'

export const ProductList = (props) => {
    const [product,setProduct] = useState([])

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

    const deleteProduct = productId => {
        setProduct(product.filter(product=> product._id != productId));
    }


    return (
        <div>
            <h1>Products : </h1>
            {
            product.map((product,index) => {
                return (
                    
                    <div key = {index}>
                        
                        <Link to = {`/product/${product._id}`}>{product.title}</Link><br/>
                        <Link to = {`/product/${product._id}/edit`}>Edit</Link>
                        <DeleteButton productId = {product._id} successCallBack = {() => deleteProduct(product._id)} />
                    </div>
                )
                
                })
            }
            
            </div>
    )
}
