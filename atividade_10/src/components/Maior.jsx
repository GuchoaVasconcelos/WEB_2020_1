import React, {Component} from 'react'
import Card from './Card'
import {connect} from "react-redux";
import {alterarValor1} from "../store/actions/Numero1ActionCreator";

class Maior extends Component {
    constructor(props) {
        super(props);
        this.state = {maior: 1}
    }


    maior(valor1,valor2){
        if(valor1> valor2){
            if(valor1 > this.state.maior){
                this.setState({maior:valor1})
            }
        }else{
            if(valor2 > this.state.maior){
                this.setState({maior:valor2})
            }
        }

    }

    componentDidMount() {
        this.maior(this.props.valor1,this.props.valor2)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps !== this.state.maior) {
            this.maior(this.props.valor1,this.props.valor2)
        }
    }

    render() {
        return (
            <div>
                <Card title='Maior' dark>
                    <strong style={{textTransform: 'capitalize'}}>{this.state.maior}</strong>
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
function mapActionCreatorToProps(dispatch) {
    return {
        alterarValor(valor1) {
            const action = alterarValor1(valor1)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapActionCreatorToProps)(Maior);