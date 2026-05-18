import { useState } from "react";
import "./style.css";

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  function getWinner(board) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  }
  const winner = getWinner(board);

  function handleClick(index) {
    const copyBoard = [...board];
    if (winner) return;
    if (copyBoard[index]) return;
    copyBoard[index] = isXTurn ? "X" : "O";
    setBoard(copyBoard);
    setIsXTurn(!isXTurn);
  }

  function handleRestart() {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  }

  return (
    <div className="tic-tac-toe-container">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {board.map((item, index) => (
          <Square key={index} value={item} onClick={() => handleClick(index)} />
        ))}
      </div>

      <h2 className="turn">
        {winner ? `${winner} Wins!` : `Turn: ${isXTurn ? "X" : "O"}`}
      </h2>
      <button className="restart-btn" onClick={handleRestart}>
        Restart Game
      </button>
    </div>
  );
}

export default TicTacToe;
