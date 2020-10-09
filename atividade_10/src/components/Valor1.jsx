import React, {Component} from 'react'

import Card from './Card'
import './Navigate.css'
import '../store/actions/pokemonActionCreator'

import {connect} from 'react-redux';
import {alterarValor1} from '../store/actions/Numero1ActionCreator'

class Valor1 extends Component {
    constructor(props) {
        super(props);
        this.props.alterarValor(5);
    }


    proximo() {
        const valor = (this.props.valor1 + 1)
        this.props.alterarValor(valor);
    }

    anterior() {
        const valor = (this.props.valor1 - 1)
        this.props.alterarValor(valor);
    }

    soma10() {
        const valor = (this.props.valor1 + 10)
        this.props.alterarValor(valor);
    }

    soma100() {
        const valor = (this.props.valor1 + 100)
        this.props.alterarValor(valor);
    }

    subtrai10() {
        const valor = (this.props.valor1 - 10)
        this.props.alterarValor(valor);
    }

    subtrai100() {
        const valor = (this.props.valor1 - 100)
        this.props.alterarValor(valor);
    }

    render() {
        return (
            <div>
                <Card title={`Valor 1`} blue>
                    <div className='navigate'>
                        <button className='btn btn-danger' onClick={() => this.subtrai100()}>Subtrair 100
                        </button>
                        <button className='btn btn-danger' onClick={() => this.subtrai10()}>Subtrair 10</button>
                        <button className='btn btn-danger' onClick={() => this.anterior()}>Subtrair 1</button>


                        <button className="btn btn-success" onClick={() => this.proximo()}>Adicionar 1</button>
                        <button className="btn btn-success" onClick={() => this.soma10()}>Adicionar 10</button>
                        <button className="btn btn-success" onClick={() => this.soma100()}>Adicionar 100</button>
                        <input value={this.props.valor1} readOnly/>
                    </div>
                </Card>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        valor1: state.numero1.valor
    }
}

function mapActionCreatorToProps(dispatch) {
    return {
        alterarValor(valor1) {
            const action = alterarValor1(valor1)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapActionCreatorToProps)(Valor1);