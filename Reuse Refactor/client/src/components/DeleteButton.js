import React from 'react'
import axios from 'axios'




export const DeleteButton = (props) => {
    const { productId, successCallBack } = props

    const deleteProduct = (e) => {
        axios.delete('http://127.0.0.1:8000/api/product/' + productId)
            .then(res => {
                successCallBack();
            })
            .catch((err) => console.log(err))
    }


    return (
        <div>
            <button onClick={deleteProduct}> Delete</button>
        </div>
    )
}
