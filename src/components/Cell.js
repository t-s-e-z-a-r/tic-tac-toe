import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import "./styles.css"

export function Cell(props){
    const { y, x, matrix, handleClick, ai, setWinner } = props;

    const handleCellClick = () => {
        if(!ai.checkMe()){
            const result = handleClick(y,x);
            ai.playerMove(y,x)
            if (result){
                if(!ai.checkPlayer()){
                    ai.makeMove();
                    if(ai.checkMe()){
                        setWinner("Computer")
                    }
                }else{
                    setWinner("Player")
                }
            }
        }        
    }



    return(
        <div className="col-4 cell border d-flex justify-content-center align-items-center" id="cell" onClick={handleCellClick}>
            {matrix[y][x] === true ? <CloseIcon sx={{ fontSize: 140 }}/> : matrix[y][x] === false ? <PanoramaFishEyeIcon sx={{ fontSize: 140 }}/> : " "}
        </div>
    )
}