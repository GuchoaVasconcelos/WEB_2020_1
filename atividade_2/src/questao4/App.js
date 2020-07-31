import React from 'react';
import './App.css';
import Arena from './questao4/Arena'
import Hero from './questao4/Hero'
import Enemy from './questao4/Enemy'
function App() {
  return (
    <div className="App">
      <Arena arena="Tokio Dome - Underground Arena" >
        <Hero nameHero='Midoria' imgHero='https://i.pinimg.com/originals/31/f8/d1/31f8d106e2be1b5bd8f085b0acaac559.jpg' />
        <Enemy nameEnemy='Bakugou' imgEnemy='https://i.pinimg.com/564x/c4/50/1d/c4501d1e87d53ad44d73e23e19a5bed7.jpg' />
      </Arena>
    </div>
  );
}

export default App;
