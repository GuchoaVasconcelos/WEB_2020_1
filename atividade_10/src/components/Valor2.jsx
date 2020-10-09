import React, {Component} from 'react'

import Card from './Card'
import './Navigate.css'
import '../store/actions/pokemonActionCreator'

import {connect} from 'react-redux';
import {alterarValor2} from '../store/actions/Numero2ActionCreator'

class Valor2 extends Component {
    constructor(props) {
        super(props);
        this.props.alterarValor2(2);
    }


    proximo() {
        const valor = (this.props.valor2 + 1)
        this.props.alterarValor2(valor);
    }

    anterior() {
        const valor = (this.props.valor2 - 1)
        this.props.alterarValor2(valor);
    }

    soma10() {
        const valor = (this.props.valor2 + 10)
        this.props.alterarValor2(valor);
    }

    soma100() {
        const valor = (this.props.valor2 + 100)
        this.props.alterarValor2(valor);
    }

    subtrai10() {
        const valor = (this.props.valor2 - 10)
        this.props.alterarValor2(valor);
    }

    subtrai100() {
        const valor = (this.props.valor2 - 100)
        this.props.alterarValor2(valor);
    }

    render() {
        return (
            <div>
                <Card title={`Valor 2   `} blue>
                    <div className='navigate'>
                        <button className='btn btn-danger' onClick={() => this.subtrai100()}>Subtrair 100
                        </button>
                        <button className='btn btn-danger' onClick={() => this.subtrai10()}>Subtrair 10</button>
                        <button className='btn btn-danger' onClick={() => this.anterior()}>Subtrair 1</button>


                        <button className="btn btn-success" onClick={() => this.proximo()}>Adicionar 1</button>
                        <button className="btn btn-success" onClick={() => this.soma10()}>Adicionar 10</button>
                        <button className="btn btn-success" onClick={() => this.soma100()}>Adicionar 100</button>
                        <input value={this.props.valor2} readOnly/>
                    </div>
                </Card>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        valor2: state.numero2.valor
    }
}

function mapActionCreatorToProps(dispatch) {
    return {
        alterarValor2(valor2) {
            const action = alterarValor2(valor2)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapActionCreatorToProps)(Valor2);