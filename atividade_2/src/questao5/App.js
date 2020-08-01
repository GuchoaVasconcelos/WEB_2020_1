import React from 'react';
import './App.css';
import Enemy from './questao2/Enemy'
import Hero from './questao2/Hero'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Herói
      </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body><Hero nameHero='Midoria' imgHero='https://i.pinimg.com/originals/31/f8/d1/31f8d106e2be1b5bd8f085b0acaac559.jpg' /></Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Vilão
      </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body><Enemy nameEnemy='Bakugou' imgEnemy='https://i.pinimg.com/564x/c4/50/1d/c4501d1e87d53ad44d73e23e19a5bed7.jpg' /></Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default App;
