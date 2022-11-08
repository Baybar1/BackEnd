import React, {useState, useEffect} from 'react'
import { Product } from '../components/Product'
import { ProductList } from '../components/ProductList'
import axios from 'axios'

export const Main = (props) => {
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

    const deleteProduct = (productId) => {
        axios.delete('http://127.0.0.1:8000/api/product/' + productId)
        .then(res => {
            console.log(res)
            setProduct(product.filter(product=> product._id != productId))
        })
        .catch((err) => console.log(err))
    }

    const createProduct = productParam => {
        axios.post('http://127.0.0.1:8000/api/product', productParam)
        .then(res => {
            console.log(res)
            console.log(res.data)
            console.log('hgtr',[...product,res.data])
            setProduct([...product,res.data])
            
        })
        .catch(err => console.log(err))
    }


    


    return (
        <div>
            <Product onSubmitProp = {createProduct} initialTitle = '' initialPrice = '' initialDescription = '' />
            <ProductList product = {product} setProduct = {setProduct} deleteProduct = {deleteProduct}/>
        </div>
    )
}
