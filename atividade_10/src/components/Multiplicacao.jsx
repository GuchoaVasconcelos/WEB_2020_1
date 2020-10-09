import React, {Component} from 'react'

import Card from './Card'
import {connect} from "react-redux";

class Multiplicacao extends Component {
    constructor(props) {
        super(props);
        this.state ={multiplicacao : ''}
    }

    multiplicacao(valor1,valor2){
        const multi = valor1 * valor2;
        this.setState({multiplicacao: multi})
    }

    componentDidMount() {
        this.multiplicacao(this.props.valor1,this.props.valor2)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.valor1 !== this.props.valor1 || prevProps.valor2 !== this.props.valor2) {
            this.multiplicacao(this.props.valor1,this.props.valor2)
        }
    }

    render() {
        return (
            <div>
                <Card title='Multiplicacao' green>
                    {this.state.multiplicacao}
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

export default connect(mapStateToProps)(Multiplicacao);
