import React, {Component} from 'react'

import Card from './Card'

export default class PokemonFront extends Component{
    render(){
        const url = `http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`
        return(
            <div>
                <Card title='Frente' green >
                    <img src={url} alt={this.props.id}></img>
                </Card>
            </div>
        )
    }
}