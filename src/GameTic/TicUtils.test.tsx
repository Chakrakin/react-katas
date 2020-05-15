import { discoverWinner } from './TicUtils';
import { GameField } from './TicBoard/TicBoard';

const playerOneWinningGameFields = [
  ['_', 'O', '_', 'X', 'X', 'X', '_', 'O', 'O'],
  ['O', '_', 'X', '_', '_', 'X', 'O', 'O', 'X'],
  ['X', 'O', '_', '_', 'X', '_', 'O', 'O', 'X'],
  ['X', 'O', 'X', 'X', 'X', 'O', 'O', 'O', 'X']
] as Array<GameField>;
const playerTwoWinningGameFields = [
  ['O', 'O', 'O', 'X', '_', '_', '_', 'X', 'X'],
  ['O', '_', 'X', 'O', 'X', 'X', 'O', '_', 'O'],
  ['_', 'X', 'O', 'X', 'O', 'X', 'O', '_', '_']
] as Array<GameField>;
const deuceGameFields = [
  ['O', 'X', 'O', 'X', 'O', 'X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X', 'X', 'O', 'O', 'X', '0']
] as Array<GameField>;

// suggested step: 7
describe('TicUtils', () => {
  it('should find the winning player given on the current gamefield', () => {
    playerOneWinningGameFields.map(gameField => expect(discoverWinner(gameField)).toBe(1));
    playerTwoWinningGameFields.map(gameField => expect(discoverWinner(gameField)).toBe(2));
    deuceGameFields.map(gameField => expect(discoverWinner(gameField)).toBe(0));
  });
});
