import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const ProductList = (props) => {
    const {product,setProduct} = props

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
        .then((res) => {
            setProduct(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])


    return (
        <div>
            {
            product.length > 0 && product.map((item,index) => {
                return(
                    <div key = {index}>
                        <p>{item.title}</p>
                        <Link to = {`/people/${product.id}`}>{item.title}</Link>
                    </div>
                )
            })
            }
        </div>
    )
}
