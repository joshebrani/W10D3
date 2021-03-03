import React from 'react';
import * as Minesweeper from '../minesweeper.js';

class Tile extends React.Component{
    constructor(props){
        super();
        this.updateGame = props.updateGame
        this.state = {tile: props.tile}
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(e){
        let id = e.currentTarget.id
        let pos = id.split("-").map((s) => {
            return parseInt(s)
        }) 
        let ctile = this.state.tile.board.grid[pos[0]][pos[1]]
        if (e.altKey){
            ctile.toggleFlag();

        }else{
            ctile.explore();

        } 
        // else if (ctile.flagged && e.altKey) {
        //     ctile.flagged = false;
        // }else if (ctile.explored === false){
        //     ctile.explored = true;
        //     this.setState ({
        //         tile: ctile
        //     })
        // }
        //call the setState
        this.setState({
            tile: ctile
        })
    }

    render(){
        let symbol = "";
        let mine ;
        const thisTile = this.state.tile;
        // thisTile.explored = true;
        if (thisTile.bombed && thisTile.explored) {
            symbol = '💣';
            mine=  'bombed';
        }else if (thisTile.explored) {
            let bc = thisTile.adjacentBombCount();
            symbol = (bc === 0) ? "__" : bc.toString();
            mine= 'explored'; 
        } else if (thisTile.flagged) {
            symbol = '🚩';
            mine = 'flagged';
        } else if (!thisTile.explored) {
            symbol  = "-";
            mine= 'unexplored';
        }
        return (
            <div id={`${thisTile.pos[0]}-${thisTile.pos[1]}`}
 onClick = {this.handleClick} className ={`tile ${mine}`}>{symbol}</div>
        )    
    }
}

export default Tile;