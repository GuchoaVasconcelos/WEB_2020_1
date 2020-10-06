import React, {Component} from 'react'

import Card from './Card'

export default class PokemonBack extends Component{
    render(){
        const url = `http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${this.props.id}.png`
        return(
            <div>
                <Card title='Costas' red >
                    <img src={url} alt={this.props.id}></img>
                </Card>
            </div>
        )
    }
}