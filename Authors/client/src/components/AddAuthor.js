import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

export const AddAuthor = (props) => {
    const [author,setAuthor] = useState('')
    const [authors,setAuthors] = useState([])
    const navigate = useNavigate()
    const [errors,setErrors] = useState([])

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/author', {
            author
        })
        .then(res => {
            console.log(res)
            console.log(res.data)
            setAuthors([...authors,res.data])
        })
        
        .catch(err => {
            const errResponse = err.response?.data.errors;
            console.log(err.response)
            const errArr = [];
            for (const key of Object.keys(errResponse)) {
                errArr.push(errResponse[key].message)
            }
            setErrors(errArr)
        })
        if (author.length >= 3) {
            navigate('/')
        }
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                {errors.map((err,index) => <p key = {index}>{err}</p>)}

                <p>
                <label>Name:</label>
                <input type = 'text' onChange={(e) => {setAuthor(e.target.value)}}></input>
                
                </p>
                <Link to = {'/'}><button>Cancel</button></Link>
                <input type = 'submit' value = 'Submit' />
            </form>
        </div>
    )
}
