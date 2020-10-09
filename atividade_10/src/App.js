import React, {Component} from 'react';
import './App.css'
import Valor1 from "./components/Valor1";
import Valor2 from './components/Valor2'
import Soma from "./components/Soma";
import Multiplicacao from "./components/Multiplicacao";
import Maior from "./components/Maior";

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>Minicurso React-Redux!</h1>
                <div className="line">
                <Valor1/>
                <Valor2/>
                </div>
                <div className="line">
                    <Maior/>
                    <Multiplicacao/>
                    <Soma/>
                </div>
            </div>
        )
    }
}