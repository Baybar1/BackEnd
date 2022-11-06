import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'


export const UpdateAuthors = () => {
    const {id} = useParams()
    const [author, setAuthor] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/author/' + id)
        .then((res) => {
            setAuthor(res.data.author)
        })
        .catch(err => console.log(err))
    },[])

    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put('http://127.0.0.1:8000/api/author/' + id, {
            author
        })
        .then((res) => {
            console.log(res)
            navigate('/')
        })
        .catch((err) => console.log(err))
    }

    return (
        <div>
            <form onSubmit={updateAuthor}>
                <p>
                    <label>Name:</label>
                    <input type = 'text' value = {author} onChange={(e) => {setAuthor(e.target.value)}} />
                </p>
                <Link to = {'/'}><button>Cancel</button></Link>
                <input type = 'submit' value = 'Submit' />
            </form>
        </div>
    )
}
