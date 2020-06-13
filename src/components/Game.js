import React from 'react';
import Board from './Board';

export default class Game extends React.Component {
    constructor() {
        super()
        this.state = {
            xisNext:true,
            stepNo: 0,
            history: [
                {squares: Array(9).fill(null)}
            ],
        }
    }
    render() {
        return (
            <div className="game">
                <Board/>
            </div>
        )
    }
}