import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import "./styles.css"

export function Cell(props){
    const { y, x, matrix, handleClick, ai } = props;
    const handleCellClick = () => {
        // ai.display();
        // ai.makeMove(matrix);
        if(!ai.checkMe() && !ai.checkEnemy()){
            handleClick(y,x);
            ai.userMove(y,x)
            ai.display()
            if(!ai.checkMe()){
                ai.makeMove();
            }
        }else{
            console.error("We have winner")
        }
    }



    return(
        <div className="col-4 cell border d-flex justify-content-center align-items-center" id="cell" onClick={handleCellClick}>
            {/* <h1>Saffasfas</h1> */}
            {matrix[y][x] === true ? <CloseIcon sx={{ fontSize: 140 }}/> : matrix[y][x] === false ? <PanoramaFishEyeIcon sx={{ fontSize: 140 }}/> : "something"}
            {/* <CloseIcon/>     */}
        </div>
    )
}