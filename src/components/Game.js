import React from 'react';
import Board from './Board';

export default class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            xisNext:true,
            stepNo: 0,
            history: [
                {squares: Array(9).fill(null)}
            ]
        }
    }
    handleClick = (i) => {
        const history = this.state.history;
        const current = history[history.length - 1];
        const squares = current.squares;
        if(this.state.isNext) squares[i]='x';
        else squares[i]='0';
        this.setState({
            history: history.concat({
                squares: squares
            }),
            xisNext: !this.state.xisNext,
            stepNumber: history.length,
            
        })
    }
    render() {
        return (
            <div className="game">
                <Board/>
                <button onClick = {()=> this.changeState()}>Click Me!</button>
            </div>
        )
    }
}