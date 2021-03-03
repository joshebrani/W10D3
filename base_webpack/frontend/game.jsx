import React from "react";
import Board from '../minesweeper.js';


class Game extends React.Component{
    constructor(){
        new Board(15, 15)        
    }
}