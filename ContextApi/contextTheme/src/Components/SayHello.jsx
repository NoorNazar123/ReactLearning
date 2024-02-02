// Components/SayHello.js
import React from 'react';
import useTheme from '../Context/theme';

export default function SayHello() {
  
  const { userName,id, darkTheme, lightTheme } = useTheme();
  
  return (
    <div>
      <h1>Hello {userName} {id}</h1>
    </div>
  );
}
