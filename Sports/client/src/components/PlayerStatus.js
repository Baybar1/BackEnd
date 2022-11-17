import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './Display.module.css'

export const PlayerStatus = (props) => {
    const {player,setPlayer} = props

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

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));


    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Player Name</StyledTableCell>
                            <StyledTableCell align="left">Actions</StyledTableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {player.map((player) => (
                            <StyledTableRow key={player.playerName}>
                                <StyledTableCell component="th" scope="row">
                                    {player.playerName}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <p>Playing</p>
                                    <p>Not Playing</p>
                                    <p>Undecided</p>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
