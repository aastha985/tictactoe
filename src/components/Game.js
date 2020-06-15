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
            ],
        }
    }

    someFunction = () => {
        return 5
    }

    render() {
        const result = this.someFunction()
        return (
            <div className="game">
                <Board value = {result}/>
            </div>
        )
    }
}