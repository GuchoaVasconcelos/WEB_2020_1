import React from 'react';
import './App.css';
import Pai from './Components/Pai'
import Card from 'react-bootstrap/Card'
function App() {
  return (
    <div className="App">
      <Card>
        <Card.Body><Pai name='Carlos' course='EC' city='Crato'></Pai></Card.Body>
      </Card>
    </div>
  );
}

export default App;
