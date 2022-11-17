import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { PlayerAdd } from './components/PlayerAdd';
import { PlayerDisplay } from './components/PlayerDisplay';
import { PlayerStatus } from './components/PlayerStatus';

function App() {

  const [player, setPlayer] = useState([])
  const [errors,setErrors] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/sports')
            .then(response => {
                console.log(response.data)
                setPlayer(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const createPlayer = playerParam => {
        axios.post('http://127.0.0.1:8000/api/sports', playerParam)
            .then(response => {
                console.log(response.data)
                setPlayer([...player, response.data])
            })
            .catch(error => {
              console.log(error)
              const errorResponse = error.response.data.errors;
              const errorArr = []
              for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
              }
              setErrors(errorArr)
            })
    }


    const deletePlayer = playerId => {
        axios.delete('http://127.0.0.1:8000/api/sports/' + playerId)
            .then(response => {
                console.log(response.data)
                setPlayer(player.filter(player => player._id !== playerId))
            })
            .catch(error => console.log(error))
    }
  return (
    <div className="App">
      <BrowserRouter>
      <Link to = {'/'}><p>Manage Players</p></Link>
      <Link to = {'/status'}><p>Manage Player Status</p></Link>
      <Routes>
        <Route path = '/' element = {<PlayerDisplay player = {player}   setPlayer = {setPlayer}  deletePlayer = {deletePlayer} />}/>
        <Route path = '/add' element = {<PlayerAdd initialPlayer = '' initialPosition = '' onSubmitProp = {createPlayer} errors = {errors} setErrors = {setErrors} />}/>
        <Route path = '/status' element = {<PlayerStatus player = {player} setPlayer = {setPlayer} />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
