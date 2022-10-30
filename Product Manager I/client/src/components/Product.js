import React, {useState} from 'react'
import './Product.css'
import axios from 'axios'

export const Product = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/product', {
            title,
            price,
            description
        })
        .then(res => {
            console.log(res)
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }


    return (
        <div className='container'>
            <h1>Product Manager</h1>
            <form onSubmit = {onSubmit}>
                <p>
                    <label>Title</label>
                    <input type = 'text' onChange={(e) => {setTitle(e.target.value)}}/>
                </p>
                <p>
                    <label>Price</label>
                    <input type = 'number' onChange={(e) => {setPrice(e.target.value)}}/>
                </p>
                <p>
                    <label>Description</label>
                    <input type = 'text' onChange={(e) => {setDescription(e.target.value)}}/>
                </p>
                <input className='button' type = 'submit' value = 'Create' />
            </form>
        </div>
    )
}
