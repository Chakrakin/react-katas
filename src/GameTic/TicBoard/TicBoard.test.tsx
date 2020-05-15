import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TicBoard } from './TicBoard';
import { testClickButtonOrder } from '../TicTestUtils';

describe('GameTic', () => {
  // suggested step: 3
  xdescribe('GameArea', () => {
    beforeEach(() => render(<TicBoard endGame={jest.fn()} />))

    it('should have a "Have fun!" headline', () => {
      screen.getByText("Have fun!");
    });

    it('should have 9 buttons displayed with value "_"', () => {
      expect(screen.getAllByRole('button').length).toBe(9);
    });

    // to set a role on a HTML element => <div role="...">...
    it('should have 3 rows', () => {
      expect(screen.getAllByRole('field-row').length).toBe(3);
    });

    it('should have all buttons set initially to display value "_"', () => {
      expect(screen.getAllByRole('button', {name: /_/i}).length).toBe(9);
    });
  });

  // suggested step: 4
  xdescribe('Button interaction', () => {
    beforeEach(() => render(<TicBoard endGame={jest.fn()}/>))

    it('should display which player is on the move', () => {
      screen.getByText('Next move from: Player 1');
    });

    it('should set a X for the first player move', () => {
      expect(screen.queryByRole('button', {name: /X/i})).not.toBeInTheDocument();
      userEvent.click(screen.getAllByRole('button')[0]);
      screen.getByRole('button', {name: /X/i});
    });

    it('should display correct player which\'s turn it is', () => {
      screen.getByText('Next move from: Player 1');
      userEvent.click(screen.getAllByRole('button')[0]);
      screen.getByText('Next move from: Player 2');
      userEvent.click(screen.getAllByRole('button')[1]);
      screen.getByText('Next move from: Player 1');
    });

    it('should use "X" for Player 1 and "O" for Player 2 when a button is clicked', () => {
      userEvent.click(screen.getAllByRole('button')[0]);
      screen.getByRole('button', {name: /X/i});
      userEvent.click(screen.getAllByRole('button')[1]);
      screen.getByRole('button', {name: /O/i});
      userEvent.click(screen.getAllByRole('button')[2]);
      expect(screen.getAllByRole('button', {name: /X/i}).length).toBe(2);
      userEvent.click(screen.getAllByRole('button')[3]);
      expect(screen.getAllByRole('button', {name: /O/i}).length).toBe(2);
    });
  });

  // suggested step: 8
  xdescribe('Game progression', () => {
    it('should call endGame when a decision is found', () => {
      const endGameCallback = jest.fn();
      render(<TicBoard endGame={endGameCallback} />);
      testClickButtonOrder([0,1,2,5,3,6,4,8,7]);
      expect(endGameCallback).toHaveBeenCalled();
    });

    it('should end the game with player one winning', () => {
      const endGameCallback = jest.fn();
      render(<TicBoard endGame={endGameCallback} />);
      testClickButtonOrder([0,4,1,5,2]);
      expect(endGameCallback).toHaveBeenCalledTimes(1);
      expect(endGameCallback).toHaveBeenCalledWith(1);
    });

    it('should end the game with player two winning', () => {
      const endGameCallback = jest.fn();
      render(<TicBoard endGame={endGameCallback} />);
      testClickButtonOrder([4,0,5,1,8,2]);
      expect(endGameCallback).toHaveBeenCalledTimes(1);
      expect(endGameCallback).toHaveBeenCalledWith(2);
    });

    it('should end the game with no one winning', () => {
      const endGameCallback = jest.fn();
      render(<TicBoard endGame={endGameCallback} />);
      testClickButtonOrder([0,1,2,5,3,6,4,8,7]);
      expect(endGameCallback).toHaveBeenCalledTimes(1);
      expect(endGameCallback).toHaveBeenCalledWith(0);
    });
  });
});
