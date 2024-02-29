import React, { useEffect, useState } from "react";
import { Cell } from "./Cell";
import "./styles.css"
import Comp from "./AI";

export function Table(){
    const baseMatrix = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ]
    const [value, setValue] = useState(true)
    const [matrix, setMatrix] = useState(baseMatrix)
    const [winner, setWinner] = useState(false)
    const AI = new Comp(matrix, false)

    const handleClick = (y, x) =>{
        const updatedMatrix = [...matrix]
        if ( updatedMatrix[y][x]=== 0){
            updatedMatrix[y][x] = value;
            setMatrix(updatedMatrix)
            setValue(!value)
            return true
        }
        return false
    }    
    const handleRefresh = () =>{
        window.location.reload();
    }

    return(
        <>
            {winner && (<div id='winner'>
                <h2>{winner} is the winner</h2>
                <button onClick={() => handleRefresh()}>Play again</button>
            </div>)}
        <div className="container" id='table'> 
            <div className="row">
                <Cell y={0} x = {0} matrix={matrix} handleClick={handleClick} ai = {AI} setWinner={setWinner}/>
                <Cell y={0} x = {1} matrix={matrix} handleClick={handleClick} ai = {AI} setWinner={setWinner}/>
                <Cell y={0} x = {2} matrix={matrix} handleClick={handleClick} ai = {AI} setWinner={setWinner}/>
            </div>
            <div className="row">
                <Cell y={1} x = {0} matrix={matrix} handleClick={handleClick} ai = {AI} setWinner={setWinner}/>
                <Cell y={1} x = {1} matrix={matrix} handleClick={handleClick} ai = {AI} setWinner={setWinner}/>
                <Cell y={1} x = {2} matrix={matrix} handleClick={handleClick} ai = {AI} setWinner={setWinner}/>
            </div>
            <div className="row">
                <Cell y={2} x = {0} matrix={matrix} handleClick={handleClick} ai = {AI} setWinner={setWinner}/>
                <Cell y={2} x = {1} matrix={matrix} handleClick={handleClick} ai = {AI} setWinner={setWinner}/>
                <Cell y={2} x = {2} matrix={matrix} handleClick={handleClick} ai = {AI} setWinner={setWinner}/>

            </div>
        </div>
        </>
    )
}