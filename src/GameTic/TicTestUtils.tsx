import { screen } from '@testing-library/react';

export const testClickButtonOrder = (order: Array<number>) => {
  const buttons = screen.getAllByRole('button');
  order.map(pos => buttons[pos].click())
}
