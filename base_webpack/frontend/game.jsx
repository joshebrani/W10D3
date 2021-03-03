import React from "react";
import * as Minesweeper from '../minesweeper.js';
import Board from "./board.jsx"

class Game extends React.Component{
    constructor(){
        super()
        this.state = {board: new Minesweeper.Board(15, 15) }       
        this.updateGame = this.updateGame.bind(this)
    }

    updateGame() {

    }

    render() {
        return(
        <Board board={this.state.board} updateGame={this.updateGame}/>     

        )
    }
}


export default Game