import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const prevCountRef = React.useRef();

  useEffect(() => {
    if (prevCountRef.current !== undefined) {
      if (count > prevCountRef.current) {
        setMessage('Add');
      } else if (count < prevCountRef.current) {
        setMessage('Sub');
      }
    }
    prevCountRef.current = count;
  }, [count]);

  const clickHandler = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const subHandler = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      Count Value: <br /> {count} <br />
      <button onClick={clickHandler}>Add</button>
      <button onClick={subHandler}>Subtract</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
