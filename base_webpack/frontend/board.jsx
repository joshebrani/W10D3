import React from "react";
// import Minesweeper from '../minesweeper.js';
import Tile from './tile.jsx';
import Game from './game.jsx';


class Board extends React.Component {
    constructor(props) {
        super();
        this.gridSize = props.gridSize;
        this.numBombs = props.numBombs;
    }

    render() {
        return(
            <>
                <h1>This is the Board</h1>
                <ul className = 'board'>{this.props.board.grid.map((row,idx)=>{
                    return (
                        <div key={idx} >
                            {/* {idx} */}
                            <div className = 'row'>
                                {row.map((tile,idx2)=>{
                                    return (
                                        <Tile 
                                            tile={tile}
                                            updateGame={this.props.updateGame}
                                            key={`${tile.pos[0]}-${tile.pos[1]}`}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    )
                })
                }

                </ul>
            </>
            )
    }
}

export default Board