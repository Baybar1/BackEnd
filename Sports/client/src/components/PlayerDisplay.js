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
import { Delete } from './Delete';



export const PlayerDisplay = (props) => {

    const {player,setPlayer} = props

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

    const deletePlayer = playerId => {
        setPlayer(player.filter(player => player._id !== playerId));
    }



    return (
        <div className={styles.border}>
            <p>List</p>
            <Link to = {'/add'}><p>Add Player</p></Link> 
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Player Name</StyledTableCell>
                            <StyledTableCell align="center">Preferred Position</StyledTableCell>
                            <StyledTableCell align="right">Actions</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {player.map((player) => (
                            <StyledTableRow key={player.playerName}>
                                <StyledTableCell component="th" scope="row">
                                    {player.playerName}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {player.playerPosition}
                                </StyledTableCell>
                                <StyledTableCell align="right"><Delete playerId = {player._id} successCallBack = {() => deletePlayer(player._id)} /></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
