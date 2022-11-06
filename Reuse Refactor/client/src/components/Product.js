import React, {useState} from 'react'
import './Product.css'


export const Product = (props) => {
    const {initialTitle,initialPrice,initialDescription, onSubmitProp} = props;
    const [title, setTitle] = useState(initialTitle)
    const [price, setPrice] = useState(initialPrice)
    const [description, setDescription] = useState(initialDescription)
    

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitProp({title,price,description})
        
    }


    return (
        <div className='container'>
            <h1>Product Manager</h1>
            <form onSubmit={onSubmit}>
                <p>
                    <label>Title</label>
                    <input type = 'text'  value = {initialTitle} onChange={(e) => {setTitle(e.target.value)}}/>
                </p>
                <p>
                    <label>Price</label>
                    <input type = 'number'  value = {initialPrice} onChange={(e) => {setPrice(e.target.value)}}/>
                </p>
                <p>
                    <label>Description</label>
                    <input type = 'text'  value = {initialDescription} onChange={(e) => {setDescription(e.target.value)}}/>
                </p>
                <input className='button' type = 'submit'  />
            </form>
        </div>
    )
}
