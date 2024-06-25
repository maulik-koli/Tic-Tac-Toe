import React, { useState } from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'
import { WINNING_COMBINATIONS } from './assets/winning-combinations'
import GameOver from './components/GameOver'

const PLAYERS = {
  O: "Player 1",
  X: "Player 2"
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = 'O'

  if (gameTurns.length > 0 && gameTurns[0].player == 'O') {
    currentPlayer = 'X';
  }

  return currentPlayer
}

const deriveGameBoard = (gameTurn) => {
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])]

  for (const turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square

    gameBoard[row][col] = player
  }

  return gameBoard
}

const deriveWinner = (gameBoard, players) => {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSelectSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSelectSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSelectSymbol = gameBoard[combination[2].row][combination[2].column]

    if (firstSelectSymbol && firstSelectSymbol === secondSelectSymbol && firstSelectSymbol === thirdSelectSymbol) {
      winner = players[firstSelectSymbol]
    }
  }

  return winner
}

export default function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurn, setGameTurn] = useState([])

  const activePlayer = deriveActivePlayer(gameTurn)
  const gameBoard = deriveGameBoard(gameTurn)
  const winner = deriveWinner(gameBoard, players)
  const hasDraw = gameTurn.length === 9 && !winner

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurn(prevTurn => {
      const currentPlayer = deriveActivePlayer(prevTurn)

      const updatedTurn = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurn]

      return updatedTurn
    })
  }

  const handleRestart = () => {
    setGameTurn([]);
  }

  const handlePlayerNamerChange = (symbol, newName) => {
    setPlayers(pervPlayers => {
      return {
        ...pervPlayers,
        [symbol]: newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === 'O'}
            onChangeName={handlePlayerNamerChange} />
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === 'X'}
            onChangeName={handlePlayerNamerChange} />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} restart={handleRestart} />
        )}
        <GameBoard onSlectSqure={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurn} />
    </main>
  )
}