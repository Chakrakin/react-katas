import React, { useState } from 'react';
import { TicBoard } from './TicBoard/TicBoard';

/*
  GameController
    * Start new game
    * Display game outcome
 */

export const TicGameMaster: React.FC = () => {
  const [ gameInProgress, setGameInProgress ] = useState(false);
  const [ phrase, setPhrase ] = useState('');

  const finishGame = (winner: number) => {
    setGameInProgress(false);
    setPhrase((winner === 0) ? 'Both are equally good!' : 'Congratulations: Player ' + winner);
  }

  const initateGame = () => {
    setPhrase('');
    setGameInProgress(true);
  }

  return <div role="TicGameMaster">
    <h1>Welcome to the Tic Tac Toe Game</h1>
    {gameInProgress ? <TicBoard endGame={finishGame}/> : <button onClick={initateGame}>New Game</button>}
    {phrase && <div>It is decided!</div>}
    {phrase}
  </div>
}
