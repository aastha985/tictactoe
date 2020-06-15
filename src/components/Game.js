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
            value:5
        }
    }

    changeState = () => {
        this.setState({
            value:6
        })
    }

    someFunction = () => {
        return 5
    }

    render() {
        // console.log(this.state);
        const result = this.someFunction()
        return (
            <div className="game">
                <Board value = {result}/>
                <button onClick = {()=> this.changeState()}>Click Me!</button>
            </div>
        )
    }
}