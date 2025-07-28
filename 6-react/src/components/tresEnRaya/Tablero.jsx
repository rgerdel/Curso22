import { useState, useEffect } from "react";

function Tablero() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");

  const handleClick = (index) => {
    let newBoard =  [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    turn === "X" ? setTurn("O") : setTurn("X");
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [left, center, right] = lines[i];
      console.log(`squares[${left}]`, squares[left]);
      console.log(`squares[${center}]`, squares[center]);
      console.log(`squares[${right}]`, squares[right]);
      if (
        squares[left] &&
        squares[left] === squares[center] &&
        squares[left] === squares[right]
      ) {
        return squares[left];
      }
    }
    return null;
  };

  useEffect(() => {
    const winner = calculateWinner(board);
    if (winner) {
      alert(`El ganador es: ${winner}`);
      setBoard(Array(9).fill(null)); // Reiniciar el tablero
      setTurn("X"); // Reiniciar el turno
    } else if (!board.includes(null)) {
      alert("Es un empate!");
      setBoard(Array(9).fill(null)); // Reiniciar el tablero
      setTurn("X"); // Reiniciar el turno
    }
  }, [board]);

  return (
    <div className="grid grid-cols-3">
      {board.map((value, index) => (
        <div
          key={index}
          className="border p-4"
          onClick={() => handleClick(index)}
        >
          {value ? value : ""}
        </div>
      ))}
    </div>
  );
}

export { Tablero };
