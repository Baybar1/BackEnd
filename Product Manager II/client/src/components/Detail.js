import axios from 'axios';
import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

export const Detail = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
        .then((res) => {
            console.log(res.data)
            setProduct(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])


    return (
        <div>
            {product.title}
            {product.price}
            {product.description}
        </div>
    )
}
