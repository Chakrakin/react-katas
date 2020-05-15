import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { TicButton } from './TicButton';

describe('TicButton', () => {
  // suggested step: 1
  describe('default behaviour', () => {
    beforeEach(() => render(<TicButton onClick={jest.fn()} />));

    it('should render a button', () => {
      screen.getByRole('button');
    });

    it('should display a default value of "_" ', () => {
      screen.getByText('_');
    });
  });
  // suggested step: 2
  xdescribe('interaction', () => {
    it('should set a given value as display value', () => {
      const button = render(<TicButton value="X" onClick={jest.fn()} />)
      screen.getByRole('button', {name: /X/i});
      button.rerender(<TicButton value="O" onClick={jest.fn()}/>)
      screen.getByRole('button', {name: /O/i});
    });

    it('should execute action when button is clicked', () => {
      const stub = jest.fn();
      render(<TicButton onClick={stub} />);
      fireEvent.click(screen.getByText('_'));
      expect(stub).toHaveBeenCalled();
    });

    it('should not call given function when a value is set', () => {
      const stub = jest.fn();
      render(<TicButton value="X" onClick={stub} />);
      fireEvent.click(screen.getByText('X'));
      expect(stub).not.toHaveBeenCalled();
    });
  });
});
