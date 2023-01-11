import React from "react";

import "./board.css"
import Box from "./Box"

function Board({ board, onCLick }) {

    return (
        <div className="board">
            {board.map((value, idx) => {
                return (
                    <Box value={value} onCLick={() =>value === null && onCLick(idx)} />
                )
            })}

        </div>


    )
}

export default Board;