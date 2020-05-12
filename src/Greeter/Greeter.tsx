import React from 'react';

interface IGreeter {
  greetAt?: string
}

export const Greeter: React.FC<IGreeter> = ({greetAt, children}) => {
  return <div>Hello {greetAt ? greetAt : 'World'}!</div>
}
