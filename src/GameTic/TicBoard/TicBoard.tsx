import React, { ReactElement, useState } from 'react';
import { TicButton } from '../TicButton/TicButton';
import { discoverWinner } from '../TicUtils';

/*
  The board
    * transform data-structure into board view
    * controls player turns
    * determines game outcome given on field events
 */

export type TicField = 'X' | 'O' | '_';
export type GameField = Array<TicField>;

interface ITicBoard {
  endGame: (winner: number) => void
}

export const TicBoard: React.FC<ITicBoard> = ({endGame}) => {
  const [ gameField, setGameField ] = useState<GameField>(Array(9).fill('_'));
  const [ isPlayerOneTurn, togglePlayerTurn ] = useState(true);

  const handleClick = (index: number) => {
    const newField = [...gameField];
    newField[index] = determineSymbol();
    setGameField(newField);
    togglePlayerTurn(!isPlayerOneTurn);
    const isOver = discoverWinner(newField);
    (isOver || newField.every(field => field !== '_')) && endGame(isOver);
  }

  const determineSymbol = () => isPlayerOneTurn ? 'X' : 'O';

  const formatField = () => gameField.reduce((acc: Array<ReactElement>, next: TicField, index: number) => {
    acc.push(<TicButton value={next} onClick={() => handleClick(index)} key={index}/>);
    if ((index + 1) % 3 === 0) {
      // replace last 3 buttons with one div entry enclosing 3 buttons
      const iteration = Math.floor(index / 3);
      acc.splice(iteration, 3, <div role="field-row" key={'iter' + iteration}>{acc.slice(iteration, 3 + iteration)}</div>)
    }
    return acc;
  }, [])

  return <div role="TicBoard">
    <h1>Have fun!</h1>
    <h3>Next move from: Player {isPlayerOneTurn ? 1 : 2}</h3>
    {formatField()}
  </div>
}
