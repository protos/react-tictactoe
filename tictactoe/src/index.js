import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Square(props){
    return (
        <button className="square" onClick={() => props.onClick(props.value)}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            isTurnX: true
        };
    }

    onSquareClick(index) {
        const buffer = this.state.squares.slice();
        if (this.state.isTurnX) {
            buffer[index] = 'X';
        } else {
            buffer[index] = 'O';
        }
        const newTurn = !this.state.isTurnX;


        this.setState({
            isTurnX: newTurn,
            squares: buffer
        });

        if (this.checkForWin(buffer)) {

        }
    }


    checkForWin(boardState) {
        // console.log('Clicked!!: ' + this.state.squares + ' ' + this.state.isTurnX);

        // count to see if there's 3 of the clicked square.
        const turn = (this.state.isTurnX? 'X': 'O');
        if (boardState.filter(k => k === turn).length !== 3) {
            console.log('To small - keep going.');
            return;
        }

        console.log(boardState);

        return true;
    }


    renderSquare(i) {
        return (
            <Square value={this.state.squares[i]}
                    onClick={() => this.onSquareClick(i)}
            />
        );
    }

    render() {
        const status = 'Next player: ' + (this.state.isTurnX ? 'X' : 'O');

        return (
            <div>
            <div className="status">{status}</div>
            <div className="board-row">
            {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
    </div>
        <div className="board-row">
            {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
    </div>
        <div className="board-row">
            {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
    </div>
        </div>
    );
    }
}

class Game extends React.Component {
    onBoardClick() {
        console.log("Board Clicked");
    }

    render() {
        return (
            <div className="game">
            <div className="game-board">
            <Board onClick={()=>this.onBoardClick()}/>
            </div>
            <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
            </div>
            </div>
    );
    }
}

// ========================================

ReactDOM.render(
<Game />,
    document.getElementById('root')
);
