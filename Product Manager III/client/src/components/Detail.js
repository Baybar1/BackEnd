import axios from 'axios';
import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

export const Detail = () => {
    const [oneProduct, setOneProduct] = useState({})
    const {id} = useParams();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/product/' + id)
        .then((res) => {
            console.log(res.data)
            setOneProduct(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[id])


    return (
        <div>
            {oneProduct.title}<br/>
            ${oneProduct.price}<br/>
            {oneProduct.description}
        </div>
    )
}
