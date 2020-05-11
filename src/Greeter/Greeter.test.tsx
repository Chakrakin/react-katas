import React from 'react';
import { screen, render } from '@testing-library/react';

describe('Greeter', () => {
  it('should print hello world', () => {
    render(<Greeter />)
    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });
});
