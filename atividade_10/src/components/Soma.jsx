import React, {Component} from 'react'

import Card from './Card'
import {connect} from "react-redux";

class Soma extends Component{
    constructor(props) {
        super(props);
        this.state ={soma : ''}
    }

    soma(valor1,valor2){
        const soma = valor1 + valor2;
        this.setState({soma: soma})
    }

    componentDidMount() {
        this.soma(this.props.valor1,this.props.valor2)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.valor1 !== this.props.valor1 || prevProps.valor2 !== this.props.valor2) {
            this.soma(this.props.valor1,this.props.valor2)
        }
    }

    render() {
        return (
            <div>
                <Card title='Soma' green>
                    {this.state.soma}
                </Card>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        valor1: state.numero1.valor,
        valor2: state.numero2.valor
    }
}

export default connect(mapStateToProps)(Soma);