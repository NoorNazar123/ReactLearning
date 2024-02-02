import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => {
        setTodo([data]); // Wrapping the single object in an array
      });
  }, []);

  return (
    <div>
      {todo ? (
        <div className='box'>
          {todo.map((item) => (
            <div key={item.id}>
              <p>User ID: {item.userId}</p>
              <p>ID: {item.id}</p>
              <p>Title: {item.title}</p>
              <p>Completed: {item.completed ? 'Yes' : 'No'}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
