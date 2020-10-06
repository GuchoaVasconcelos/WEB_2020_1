import React, {Component} from 'react'

import Card from './Card'
import './Navigate.css'
import '../store/actions/pokemonActionCreator'

import {connect} from 'react-redux';
import {alterarID} from "../store/actions/pokemonActionCreator";

class Navigate extends Component {
    constructor(props) {
        super(props);
        this.props.alterarPokemonId(314);
    }


    proximo() {
        const id = (this.props.pokemonId + 1 > 895) ? this.props.pokemonId : this.props.pokemonId + 1;
        this.props.alterarPokemonId(id);
    }

    anterior() {
        const id = (this.props.pokemonId - 1 < 1) ? this.props.pokemonId : this.props.pokemonId - 1;
        this.props.alterarPokemonId(id);
    }

    soma10() {
        const id = (this.props.pokemonId + 10 > 895) ? 895 : this.props.pokemonId + 10
        this.props.alterarPokemonId(id);
    }

    soma100() {
        const id = (this.props.pokemonId + 100 > 895) ? 895 : this.props.pokemonId + 100
        this.props.alterarPokemonId(id);
    }

    subtrai10() {
        const id = (this.props.pokemonId - 1 < 10) ? 1 : this.props.pokemonId - 10
        this.props.alterarPokemonId(id);
    }

    subtrai100() {
        const id = (this.props.pokemonId - 100 < 1) ? 1 : this.props.pokemonId - 100
        this.props.alterarPokemonId(id);
    }

    render() {
        return (
            <div>
                <Card title={`ID do Pokemon`} blue>
                    <div className='navigate'>
                        <button className='btn btn-danger' onClick={() => this.subtrai100()}>Voltar 100 pokemons
                        </button>
                        <button className='btn btn-danger' onClick={() => this.subtrai10()}>Voltar 10 pokemons</button>
                        <button className='btn btn-danger' onClick={() => this.anterior()}>Anterior</button>


                        <button className="btn btn-success" onClick={() => this.proximo()}>Próximo</button>
                        <button className="btn btn-success" onClick={() => this.soma10()}>Avançar 10 pokemons</button>
                        <button className="btn btn-success" onClick={() => this.soma100()}>Avançar 100 pokemons</button>
                        <input value={this.props.pokemonId} readOnly/>
                    </div>
                </Card>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        pokemonId: state.pokemonId.id
    }
}

function mapActionCreatorToProps(dispatch) {
    return {
        alterarPokemonId(novoId) {
            const action = alterarID(novoId)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapActionCreatorToProps)(Navigate);