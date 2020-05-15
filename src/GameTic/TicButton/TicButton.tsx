import React from 'react';
import { TicField } from '../TicBoard/TicBoard';

/*
  Button
    * in control of default value and placed value
    * handles onClick logic
 */

interface ITicButton {
  value?: TicField,
  onClick: () => void
}

export const TicButton: React.FC<ITicButton> = ({ value= '_', onClick }) => {
  const handleClick = () => value === '_' && onClick();
  return <button onClick={handleClick}>{value}</button>;
}
