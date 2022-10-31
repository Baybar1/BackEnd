import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'


export const Update = () => {
    const {id} = useParams();
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/product/' + id)
        .then((res) => {
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
        })
        .catch(err => console.log(err))
    },[])

    const updateProduct = (e) => {
        e.preventDefault('http://127.0.0.1:8000/api/product/' + id);
        axios.put('http://127.0.0.1:8000/api/product/' + id, {
            title,
            price,
            description
        })
        .then((res) => {
            console.log(res)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={updateProduct}>
                
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
