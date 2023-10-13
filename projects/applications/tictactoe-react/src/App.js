import { useState } from 'react';
import "./styles.css";


function Square({ val, onSquareClick }) {
  return <button className="square" onClick={onSquareClick}> 
    {val}
  </button>;
}


function Board({ xIsNext, squares, onPlay }) {
  
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      console.log('win', calculateWinner(squares))

      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = "Победитель: " + winner[0];
  } else {
    status = "Сейчас ходят: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <h2 className='status'>{status}</h2>
      <div className="board-row">
        <Square val={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square val={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square val={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square val={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square val={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square val={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square val={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square val={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square val={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      
    </>
  )
}


function calculateWinner(squares) {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2],
  ];
  for (let i=0; i<lines.length; i++) {
    const [a,b,c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], lines[i]];
    }
  }
  return null;
}


export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Совершен ход № ' + move;
    } else {
      description = 'Игра началась';
    }

    return (
      <li key={move}>
        <button 
          className='btn-history' 
          onClick={() => jumpTo(move)}> {description}
        </button>
      </li>
    );
  });


  
  return (
    <div className='game'>
      <div className='game-board'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className='game-info'>
        <h3>История игры:</h3>
        <ul>{moves}</ul>
      </div>
    </div>
  )
}