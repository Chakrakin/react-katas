import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// to set a role on a HTML element => <div role="...">...
it('renders Tic Tac Toe Game', () => {
  render(<App />);
  screen.getByRole('TicGameMaster');
});
