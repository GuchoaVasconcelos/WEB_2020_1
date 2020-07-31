import React from 'react';
import './App.css';
import Arena from './questao3/Arena'
import Hero from './questao4/Hero'
import Enemy from './questao4/Enemy'
import World from './questao3/World'
function App() {
  return (
    <div className="App">
      <World>
        <Arena />
        <Arena />
        <Arena />
      </World>
    </div>
  );
}

export default App;
