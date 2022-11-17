import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import styles from './Display.module.css'

export const PlayerAdd = (props) => {

    const {initialPlayer, initialPosition, onSubmitProp, errors, setErrors} = props;
    const [playerName,setPlayerName] = useState(initialPlayer)
    const [playerPosition,setPlayerPosition] = useState(initialPosition)
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({playerName, playerPosition})
        if (playerName.length > 2) {
            navigate('/')
        }
    }

    return (
        <div className={styles.border}>
            <Link to = {'/'}><p>List</p></Link>
            <p>Add Player</p>
            <div className={styles.border}>
                <p>Add Player</p>
                <div>
                <form onSubmit={onSubmitHandler} >
                    {errors.map((error, index) => <p key = {index} style={{color: 'red'}} >{error}</p>)}
                    <label>Player Name:</label>
                    <input type = 'text' value = {playerName} onChange={(e) => setPlayerName(e.target.value)} />
                    <label>Preferred Position</label>
                    <input type = 'text' value = {playerPosition} onChange={(e) => setPlayerPosition(e.target.value)} />
                    <input type = 'submit' />
                </form>
                </div>
            </div>
        </div>
    )
}
