import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const DisplayAuthors = (props) => {
    const [loaded, setLoaded] = useState(false)
    const {removeAuthors, authors,setAuthors} = props

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/author')
        .then((res) => {
            console.log(res)
            console.log(res.data)
            setAuthors(res.data)
            setLoaded(true)
        })
        .catch((err) => {
            console.log(err)
        })
    },[authors])

    const deleteAuthor = (authorsId) => {
        axios.delete('http://127.0.0.1:8000/api/author/' + authorsId)
        .then(res => {
            console.log(res)
            removeAuthors(authorsId)
        })
        .catch((err) => console.log(err))
    }
    const alphabetically = authors.sort((a,b) => a.name > b.name ? 1 : -1)
    
    return (
        <div>
            <Link to = '/author'>Add an author</Link>
            {
                loaded && alphabetically.map((authors,index) => {
                    return (
                        <div key = {index}>
                            <p>{authors.author}</p>
                            <Link to = {'/author/edit/' + authors._id}>Edit</Link>
                            <button onClick={(e) => deleteAuthor(authors._id)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
