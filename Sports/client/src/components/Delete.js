import React from 'react'
import axios from 'axios'

export const Delete = (props) => {

    const {playerId, successCallBack} = props

    const deletePlayer = (e) => {
        axios.delete('http://127.0.0.1:8000/api/sports/' + playerId)
        .then(response => {
            successCallBack();
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <button onClick={deletePlayer}>Delete</button>
        </div>
    )
}
