import React from 'react';


// After first test -> implementation looked like:
//
// export const Greeter = () => {
//   return <div>Hello World!</div>
// }

// Second test with refactoring looked like:
interface IGreeter {
  greetAt?: string
}

export const Greeter: React.FC<IGreeter> = ({greetAt, children}) => {
  return <div>Hello {greetAt ? greetAt : 'World'}!</div>
}
