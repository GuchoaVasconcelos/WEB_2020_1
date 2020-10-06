import React, {Component} from 'react';
import './App.css'
import Card from './components/Card'
import Navigate from "./components/Navigate";
import PokemonBack from "./components/PokemonBack";
import PokemonFront from "./components/PokemonFront";
import PokemonInfo from "./components/PokemonInfo";

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>Minicurso React-Redux!</h1>
                <div className="line">
                <Navigate/>
                </div>
                <div className="line">
                    <PokemonFront/>
                    <PokemonBack/>
                    <PokemonInfo/>
                </div>
            </div>
        )
    }
}