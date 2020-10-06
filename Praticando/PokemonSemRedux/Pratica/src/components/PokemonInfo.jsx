import React, {Component} from 'react'
import axios from "axios";
import Card from './Card'

export default class PokemonInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', height: '', order: '', weight: '', abilities: ''}
    }

    loadPokemon() {
        const URL = `https://pokeapi.co/api/v2/pokemon/${this.props.id}`
        axios.get(URL)
            .then(
                (res) => {
                    this.setState({
                        name: res.data.name,
                        height: res.data.height,
                        weight: res.data.weight,
                        order: res.data.order,
                        base_experience: res.data.base_experience
                    })
                }
            )
            .catch(
                error => console.log(error)
            )

    }

    componentDidMount() {
        this.loadPokemon()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps !== this.props.id) {
            this.loadPokemon()
        }
    }

    render() {
        return (
            <div>
                <Card title='Pokemon Info' dark>
                    <strong style={{textTransform: 'capitalize'}}>{this.state.name}</strong>
                    <br/> Altura: {this.state.height}
                    <br/> Peso: {this.state.weight}
                    <br/> Ordem: {this.state.order}
                    <br/> base_experience: {this.state.base_experience}

                </Card>
            </div>
        )
    }
}