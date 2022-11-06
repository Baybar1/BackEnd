import React, { useState } from 'react'
import { AddAuthor } from '../components/AddAuthor'
import { DisplayAuthors } from '../components/DisplayAuthors'

export const Main = (props) => {
    const [authors,setAuthors] = useState([])
    const removeAuthors = authorId => {
        setAuthors(authors.filter(author => author._id != authorId))
    }



    return (
        <div>
            <DisplayAuthors authors = {authors} setAuthors = {setAuthors} removeAuthors = {removeAuthors} />
        </div>
    )
}
