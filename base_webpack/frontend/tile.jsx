import React from 'react';
import * as Minesweeper from '../minesweeper.js';

class Tile extends React.Component{
    constructor(props){
        super();
        this.updateGame = props.updateGame
        this.state = {tile: props.tile}
    }


    render(){
        let symbol = "";
        const thisTile = this.state.tile
        if (thisTile.explored) {
            let bc = thisTile.adjacentBombCount();
            symbol = (bc === 0) ? "" : bc.toString()
        } else if (!thisTile.explored) {
            
        } else if (thisTile.bombed) {
            symbol = '💣'
        } else if (thisTile.flagged) {
            symbol = '🚩'
        }
        return (
            <div>T</div>
        )    
    }
}

export default Tile;