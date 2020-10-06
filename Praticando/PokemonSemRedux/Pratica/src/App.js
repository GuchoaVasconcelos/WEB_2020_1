import React, {Component} from 'react';
import './App.css'
import Card from './components/Card'
import Navigate from "./components/Navigate";
import PokemonBack from "./components/PokemonBack";
import PokemonFront from "./components/PokemonFront";
import PokemonInfo from "./components/PokemonInfo";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {id: 201}
        this.setId = this.setId.bind(this);
    }

    setId(novoID){
        this.setState({id:novoID})
    }

    render() {
        return (
            <div className="container">
                <h1>Minicurso React-Redux!</h1>
                <div className="line">
                <Navigate id={this.state.id} setID={this.setId}/>
                </div>
                <div className="line">
                    <PokemonFront id={this.state.id}/>
                    <PokemonBack id={this.state.id}/>
                    <PokemonInfo id={this.state.id}/>
                </div>
            </div>
        )
    }
}