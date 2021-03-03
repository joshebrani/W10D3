import React from "react";
import Minesweeper from '../minesweeper.js';


class Board extends React.Component {
    constructor(gridSize, numBombs) {
        super();
        this.gridSize = gridSize
        this.numBombs = numBombs
    }

    render() {
        return(
            <h1>This is the Board</h1>
            )
    }
}

export default Board