import React from 'react';

interface GreetingsProps {
  name: string;
  mark: string;
  optional?: string;
  onClick:(name:string) => void;
};

function Greetings({ name, mark, optional,onClick }: GreetingsProps) {
  const handleClick = () => onClick(name);
    return (
    <div>
      Hello, {name} {mark}
      {optional}
        <div>
            <button onClick={handleClick}> Click me </button>
        </div>

      {/* {optional && <p>{optional}</p>} */}
    </div>
  );
}

Greetings.defaultProps = {
  mark: '!'
};

export default Greetings;
