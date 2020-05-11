import React from 'react';
import { screen, render } from '@testing-library/react';
import { Greeter } from './Greeter';

describe('Greeter', () => {
  it('should print hello world', () => {
    render(<Greeter />)
    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });

  it('should greet a given value', () => {
    const valueToGreet = 'Mike';
    render(<Greeter greetAt={valueToGreet} />)
    expect(screen.getByText('Hello ' + valueToGreet + '!')).toBeInTheDocument();
  });
});
