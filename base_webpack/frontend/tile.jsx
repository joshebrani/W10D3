import React from 'react';
import * as Minesweeper from '../minesweeper.js';

class Tile extends React.Component{
    constructor(props){
        super();
        this.updateGame = props.updateGame
        this.state = {tile: props.tile}
    }


    handleClick(e){
        if (e.currentTarget.explored === false){
            e.currentTarget.explored = true;
        }else if (!e.currentTarget.flagged && e.altKey){
            e.currentTarget.flagged  = true;
        } else if (e.currentTarget.flagged && e.altKey) {
            e.currentTarget.flagged = false;
        }
        //call the setState
    }

    render(){
        let symbol = "";
        let mine ;
        const thisTile = this.state.tile;
        if (thisTile.explored) {
            let bc = thisTile.adjacentBombCount();
            symbol = (bc === 0) ? "_" : bc.toString();
            mine= 'explored';
        } else if (!thisTile.explored) {
            symbol  = "_";
            mine= 'unexplored';
            
        } else if (thisTile.bombed) {
            symbol = '💣';
            mine=  'bombed';
        } else if (thisTile.flagged) {
            symbol = '🚩';
            mine = 'flagged';
        }
        return (
            <div className ={`tile ${mine}`}>{symbol}</div>
        )    
    }
}

export default Tile;