import { GameField, TicField } from './TicBoard/TicBoard';

/*
  Utils to check if given field contains a winning combination
  method: discoverWinner
  input: field with current values
 */

const WinningCombination = [
  // horizontal
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  // vertical
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  // diagonal
  [0, 4, 8], [2, 4, 6]
]

export const discoverWinner = (gameField: GameField): number => {
  const isPlayerOneWinning: boolean = hasWinningFields(extractIndexOfGameField(gameField, 'X'));
  const isPlayerTwoWinning: boolean = hasWinningFields(extractIndexOfGameField(gameField, 'O'));
  return isPlayerOneWinning ? 1 : isPlayerTwoWinning ? 2 : 0;
}

const extractIndexOfGameField = (gameField: GameField, searchString: 'X' | 'O') =>
  gameField.reduce((acc: Array<number>, next: TicField, index: number) => {
    next === searchString && acc.push(index);
    return acc;
  }, [] as Array<number>);

const hasWinningFields = (fields: Array<number>): boolean => WinningCombination.some(combination => includesAllFields(combination, fields));

const includesAllFields = (target: Array<number>, arr: Array<number>) => target.every(v => arr.includes(v));
