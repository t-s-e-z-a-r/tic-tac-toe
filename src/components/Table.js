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
    const [trecker, setTrecker] = useState(false)
    const AI = new Comp(matrix, true)

    // const checkAll = (y, x) => {
    //     for (let i=0; i<baseMatrix[0].length; i++){
    //         if (matrix[i][x]!==value){
    //             break
    //         }
    //         if (i === baseMatrix[0].length - 1 && matrix[i][x]===value){
    //             console.log("Here");
    //             setTrecker(true)
    //         }
    //     }   
    //     for (let i=0; i<baseMatrix[0].length; i++){
    //         if (matrix[y][i]!==value){
    //             break
    //         }
    //         if (i === baseMatrix[0].length - 1 && matrix[y][i]===value){
    //             console.log("Here");
    //             setTrecker(true)
    //         }
    //     }   
    //     for (let i=0; i<baseMatrix[0].length; i++){
    //         if (matrix[i][i]!==value){
    //             break
    //         }
    //         if (i === baseMatrix[0].length - 1 && matrix[i][i]===value){
    //             console.log("Here");
    //             setTrecker(true)
    //         }
    //     }   
    //     for (let i=0; i<baseMatrix[0].length; i++){
    //         if (matrix[i][baseMatrix.length-i-1]!==value){
    //             break
    //         }
    //         if (i === baseMatrix[0].length - 1 && matrix[i][baseMatrix.length-i-1]===value){
    //             console.log("Here");
    //             setTrecker(true)
    //         }
    //     }   
    // }
    
    useEffect(()=>{
        console.log(matrix)
    },[matrix])

    const handleClick = (y, x) =>{
        if (!trecker){
            const updatedMatrix = [...matrix]
            if ( updatedMatrix[y][x]=== 0){
                updatedMatrix[y][x] = value;
                setMatrix(updatedMatrix)
                // checkAll(y, x);
                setValue(!value)
            }
        }
    }    
    return(
        <div className="container" id='table'> 
            <div className="row">
                <Cell y={0} x = {0} matrix={matrix} handleClick={handleClick} ai = {AI}/>
                <Cell y={0} x = {1} matrix={matrix} handleClick={handleClick} ai = {AI}/>
                <Cell y={0} x = {2} matrix={matrix} handleClick={handleClick} ai = {AI}/>
            </div>
            <div className="row">
                <Cell y={1} x = {0} matrix={matrix} handleClick={handleClick} ai = {AI}/>
                <Cell y={1} x = {1} matrix={matrix} handleClick={handleClick} ai = {AI}/>
                <Cell y={1} x = {2} matrix={matrix} handleClick={handleClick} ai = {AI}/>
            </div>
            <div className="row">
                <Cell y={2} x = {0} matrix={matrix} handleClick={handleClick} ai = {AI}/>
                <Cell y={2} x = {1} matrix={matrix} handleClick={handleClick} ai = {AI}/>
                <Cell y={2} x = {2} matrix={matrix} handleClick={handleClick} ai = {AI}/>

            </div>
        </div>
    )
}