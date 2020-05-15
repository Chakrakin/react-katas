import React from 'react';
import { screen, render } from '@testing-library/react';
import { Greeter } from './Greeter';

describe('Greeter', () => {
  it('should print hello world', () => {
    render(<Greeter />)
    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });

  it('should greet a given value', () => {
    const component = render(<Greeter greetAt="Mike" />)
    expect(screen.getByText('Hello ' + 'Mike' + '!')).toBeInTheDocument();
    component.rerender(<Greeter greetAt="Mobile Mike" />);
    expect(screen.getByText('Hello ' + 'Mobile Mike' + '!')).toBeInTheDocument();
    component.rerender(<Greeter greetAt="Scotty" />);
    expect(screen.getByText('Hello ' + 'Scotty' + '!')).toBeInTheDocument();
  });
});
