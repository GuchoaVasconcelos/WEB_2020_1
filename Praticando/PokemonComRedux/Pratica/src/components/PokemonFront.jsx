import React, {Component} from 'react'

import Card from './Card'
import {connect} from "react-redux";

class PokemonFront extends Component{
    render(){
        const url = `http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.pokemonId}.png`
        return(
            <div>
                <Card title='Frente' green >
                    <img src={url} alt={this.props.pokemonId}></img>
                </Card>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        pokemonId: state.pokemonId.id,
    }
}

export default connect(mapStateToProps)(PokemonFront);