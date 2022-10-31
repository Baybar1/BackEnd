import React, {useState} from 'react'
import { Product } from '../components/Product'
import { ProductList } from '../components/ProductList'

export const Main = (props) => {
    const [product,setProduct] = useState([])
    const removeProduct = productId => {
        setProduct(product.filter(product=> product._id != productId));
    }
    return (
        <div>
            <Product product = {product} setProduct = {setProduct}/>
            <ProductList product = {product} setProduct = {setProduct} removeProduct = {removeProduct}/>
        </div>
    )
}
