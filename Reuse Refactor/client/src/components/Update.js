import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Product } from './Product'
import { DeleteButton } from './DeleteButton'

export const Update = (props) => {
    const { id } = useParams;
    const [product, setProduct] = useState({})
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/product/${id}`)
            .then((res) => {
                console.log(res)
                setProduct(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    const updateProduct = (productParam) => {
        axios.put('http://127.0.0.1:8000/api/product/' + id, productParam)
            .then((res) => console.log(res))
            .catch(err => console.log(err))
            
    }

    return (
        <div>
            {
                loaded && (
                    <div>
                <Product onSubmitProp={updateProduct} initialTitle={product.title} initialPrice={product.price} initialDescription={product.description} />
                <DeleteButton productId = {product._id} successCallBack = {() => navigate('/')}/>
                    </div>
                
                )
            }
        </div>
    )
}
