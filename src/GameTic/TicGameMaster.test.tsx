import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { TicGameMaster } from './TicGameMaster';
import { testClickButtonOrder } from './TicTestUtils';

describe('TicGameMaster', () => {

  // suggested step: 5
  xit('should have a welcome headline', () => {
    render(<TicGameMaster />);
    screen.getByText('Welcome to the Tic Tac Toe Game');
  });

  // suggested step: 6
  xdescribe('New Game', () => {
    it('should has a "New Game" button', () => {
      render(<TicGameMaster />);
      screen.getByText('New Game');
    });

    // to set a role on a HTML element => <div role="...">..
    it('should display the TicBoard after new Game button press and hide new Game button', () => {
      render(<TicGameMaster />);
      expect(screen.queryByRole('TicBoard')).not.toBeInTheDocument();
      fireEvent.click(screen.getByText('New Game'));
      expect(screen.getByRole('TicBoard')).toBeVisible();
      expect(screen.queryByText('New Game')).not.toBeInTheDocument();
    });
  });

  // suggested step: 9
  xdescribe('Game ending', () => {
    beforeEach(() => {
      render(<TicGameMaster />);
      fireEvent.click(screen.getByText('New Game'));
    });

    it('should end the game when a winner is found', () => {
      testClickButtonOrder([0,4,1,5,2]);
      screen.getByText('It is decided!');
    });

    it('should display a winner when a winning combination is set for player 1', () => {
      testClickButtonOrder([0,4,1,5,2]);
      screen.getByText('Congratulations: Player 1');
    });

    it('should display a winner when a winning combination is set for player 2', () => {
      testClickButtonOrder([8,0,4,1,5,2]);
      screen.getByText('Congratulations: Player 2');
    });

    it('should display a winner when a winning combination is set for player 2', () => {
      testClickButtonOrder([0,1,2,5,3,6,4,8,7]);
      screen.getByText('Both are equally good!');
    });

    it('should hide the gamefield when a decision is found', () => {
      testClickButtonOrder([0,4,1,5,2]);
      expect(screen.queryByRole('TicBoard')).not.toBeInTheDocument();
    });

    it('should start a new game', () => {
      testClickButtonOrder([0,4,1,5,2]);
      fireEvent.click(screen.getByText('New Game'));
      expect(screen.getByRole('TicBoard')).toBeVisible();
      expect(screen.queryByText('New Game')).not.toBeInTheDocument();
      expect(screen.queryByText('It is decided!')).not.toBeInTheDocument();
      expect(screen.queryByText(/Congratulations: Player/i)).not.toBeInTheDocument();
    });
  });
});
